const { test, expect } = require('@playwright/test');
const { mockExternal } = require('./helpers');

// Coverage for the media/jQuery cleanup: vanilla accordion, fetch-based
// footer include, and no broken image references after the WebP conversion.

test('accordion opens and closes without jQuery', async ({ page }) => {
  await mockExternal(page);
  await page.goto('/doorstops/extension');

  const header = page.locator('.accordion-header').first();
  await header.scrollIntoViewIfNeeded();
  const content = page.locator('.accordion-header').first().locator('xpath=following-sibling::*[1]');

  await header.click();
  await expect(header).toHaveClass(/active/);
  await expect(content).toBeVisible();

  await header.click();
  await expect(header).not.toHaveClass(/active/);
  await expect(content).toBeHidden();
});

test('footer fragment loads via fetch on legacy pages', async ({ page }) => {
  await mockExternal(page);
  await page.goto('/mission');
  await expect(page.locator('#footer-placeholder .footer')).toBeVisible();
  await expect(page.locator('#footer-placeholder .copyright')).toContainText('Doorstop Education');
  // copyright year auto-updates rather than being hardcoded
  await expect(page.locator('#footer-placeholder .copyright')).toContainText(
    `Copyright ${new Date().getFullYear()}`
  );
});

test('inline and React footers show the current copyright year', async ({ page }) => {
  await mockExternal(page);
  const year = String(new Date().getFullYear());
  await page.goto('/research/'); // inline legacy footer
  await expect(page.locator('.copyright')).toContainText(`Copyright ${year}`);
  await page.goto('/about'); // React SiteFooter
  await expect(page.locator('.copyright')).toContainText(`Copyright ${year}`);
});

for (const path of ['/', '/mission', '/doorstops/', '/empower']) {
  test(`no broken images on ${path}`, async ({ page }) => {
    await mockExternal(page);
    const broken = [];
    page.on('response', resp => {
      if (resp.status() === 404 && /\.(webp|png|jpe?g|svg|gif)(\?|$)/i.test(resp.url())) {
        broken.push(resp.url());
      }
    });
    await page.goto(path, { waitUntil: 'networkidle' });
    expect(broken).toEqual([]);
  });
}
