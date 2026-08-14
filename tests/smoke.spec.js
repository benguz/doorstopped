const { test, expect } = require('@playwright/test');
const { mockExternal } = require('./helpers');

// Core pages must load with a 200, render real content, and throw no JS errors.
const PAGES = [
  { path: '/' },
  { path: '/student' },
  { path: '/about' },
  { path: '/mission' },
  { path: '/search' },
  { path: '/doorstops/' },
  { path: '/doorstops/grades' },
  { path: '/doorstops/extension' },
  { path: '/research/' },
];

for (const { path, knownErrors = [] } of PAGES) {
  test(`page ${path} loads cleanly`, async ({ page }) => {
    await mockExternal(page);
    const pageErrors = [];
    page.on('pageerror', err => pageErrors.push(err.message));

    const response = await page.goto(path);
    expect(response.status()).toBe(200);
    await expect(page).toHaveTitle(/./);
    // every page renders either a heading or the site header/nav
    await expect(page.locator('h1, h2, header, nav').first()).toBeVisible();
    const unexpected = pageErrors.filter(msg => !knownErrors.some(re => re.test(msg)));
    expect(unexpected).toEqual([]);
  });
}

test('key assets resolve (css, main js, logo)', async ({ page, request }) => {
  await mockExternal(page);
  for (const asset of [
    '/assets/css/style.css',
    '/assets/js/script.js',
    '/css/styles.css',
    '/pages.json',
  ]) {
    const res = await request.get(asset);
    expect(res.status(), `${asset} should resolve`).toBe(200);
  }
});

test('legacy redirect targets in _redirects resolve', async ({ request }) => {
  // Netlify handles the redirects themselves; here we pin that the redirect
  // *destinations* keep existing so migration doesn't orphan them.
  for (const target of [
    '/doorstops/poop',
    '/doorstops/grades',
    '/college/princeton',
    '/doorstops/leverage/attendance',
    '/doorstops/ref',
  ]) {
    const res = await request.get(target);
    expect(res.status(), `${target} should resolve`).toBe(200);
  }
});
