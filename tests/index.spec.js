const { test, expect } = require('@playwright/test');
const { mockExternal } = require('./helpers');

test.describe('landing page', () => {
  test.beforeEach(async ({ page }) => {
    await mockExternal(page);
    await page.goto('/');
  });

  test('renders hero heading', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: /inspiring student agency/i })
    ).toBeVisible();
  });

  test('links to core student surfaces exist', async ({ page }) => {
    const dashboardLinks = page.locator('a[href*="dashboard"]');
    await expect(dashboardLinks.first()).toBeAttached();
  });
});
