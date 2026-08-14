const { test, expect } = require('@playwright/test');
const { mockExternal } = require('./helpers');

test.describe('AI topic search page', () => {
  test('placeholder text rotates', async ({ page }) => {
    await mockExternal(page);
    await page.goto('/search');
    const input = page.locator('#input-field');
    const first = await input.getAttribute('placeholder');
    await expect
      .poll(async () => input.getAttribute('placeholder'), { timeout: 10_000 })
      .not.toBe(first);
  });

  test('submitting a topic calls the AI endpoint and opens the result', async ({
    page,
    context,
  }) => {
    await mockExternal(page, {
      aiResponses: { '/topic-search': '/doorstops/grades' },
    });
    // the page opens the result on fix.school — stub that domain out
    await context.route('https://fix.school/**', route =>
      route.fulfill({ status: 200, contentType: 'text/html', body: '<h1>stub</h1>' })
    );

    await page.goto('/search');
    await page.locator('#input-field').fill('my grades are bad');

    const popupPromise = context.waitForEvent('page', { timeout: 10_000 }).catch(() => null);
    await page.locator('#input-field').press('Enter');

    // non-Safari path opens a new tab; Safari path navigates in place
    const popup = await popupPromise;
    if (popup) {
      expect(popup.url()).toContain('fix.school/doorstops/grades');
    } else {
      await page.waitForURL('**fix.school**');
    }
  });
});
