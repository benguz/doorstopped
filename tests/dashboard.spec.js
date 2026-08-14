const { test, expect } = require('@playwright/test');
const { mockExternal, skipOnboarding } = require('./helpers');

test.describe('dashboard — first visit onboarding', () => {
  test('shows onboarding overlay, then category survey', async ({ page }) => {
    await mockExternal(page);
    await page.goto('/dashboard');

    await expect(page.locator('#onboarding-element')).toBeVisible();
    // survey appears after the timed intro (3s fade + 1s)
    await expect(page.locator('#onboarding-survey')).toBeVisible({ timeout: 10_000 });

    // pick two categories and continue
    await page.locator('#policy').click();
    await page.locator('#mental').click();
    await page.locator('#onboarding-button').click();

    // survey fades out and the card stack becomes usable
    await expect(page.locator('#onboarding-survey')).toBeHidden({ timeout: 10_000 });
    await expect(page.locator('#dashboard-body')).toBeVisible();
    await expect(page.locator('#card-container .card:visible').first()).toBeVisible();

    // onboarding is persisted so it won't replay
    expect(await page.evaluate(() => localStorage.getItem('onboardingDone'))).toBe('true');
  });
});

test.describe('dashboard — returning user', () => {
  test.beforeEach(async ({ page }) => {
    await mockExternal(page);
    await skipOnboarding(page);
  });

  test('renders the card stack without onboarding', async ({ page }) => {
    await page.goto('/dashboard');
    await expect(page.locator('#dashboard-body')).toBeVisible();
    await expect(page.locator('#onboarding-survey')).toBeHidden();
    await expect(page.locator('#card-container .card').first()).toBeAttached();
    // top card is populated from the placeholder policy card
    await expect(page.locator('#first')).toBeVisible();
  });

  test('previously swiped cards are removed from the stack', async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.setItem(
        'swipedRight',
        JSON.stringify([{ title: 'x', link: '/doorstops/poop', id: 'policy-card-7' }])
      );
    });
    await page.goto('/dashboard');
    await expect(page.locator('#policy-card-7')).toHaveCount(0);
  });

  test('search filters doorstops from pages.json and links to them', async ({ page, isMobile }) => {
    await page.goto('/dashboard');
    // the search box lives in the Explore section (#bingo-section)
    if (isMobile) {
      await page.locator('#nav4m').click();
    } else {
      await page.locator('#nav4').click();
    }
    await expect(page.locator('#bingo-section')).toBeVisible();
    const search = page.locator('#search-input');
    await search.pressSequentially('boring'); // page listens for keyup, so type for real

    const results = page.locator('#results-container div');
    await expect(results.first()).toBeVisible();

    await Promise.all([page.waitForURL('**/doorstops/**'), results.first().click()]);
    await expect(page.locator('h1, h2').first()).toBeVisible();
  });

  test('desktop nav switches sections', async ({ page, isMobile }) => {
    test.skip(isMobile, 'desktop-only sidenav');
    await page.goto('/dashboard');
    await expect(page.locator('#desktop-sidenav')).toBeVisible();
    await page.locator('#nav3').click(); // Doorstops section
    await expect(page.locator('#left-section')).toBeVisible();
    // and back to the swipe stack
    await page.locator('#nav2').click();
    await expect(page.locator('#card-container')).toBeVisible();
  });

  test('heart button records a right-swipe in localStorage', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'mobile swipe buttons');
    await page.goto('/dashboard');
    await expect(page.locator('#first')).toBeVisible();
    await page.locator('#leftm').click({ force: true });
    await expect
      .poll(async () =>
        page.evaluate(() => JSON.parse(localStorage.getItem('swipedRight') || '[]').length)
      )
      .toBeGreaterThan(0);
  });
});
