const { test, expect } = require('@playwright/test');
const { mockExternal } = require('./helpers');

test.describe('student landing page', () => {
  test('demo video source is chosen per viewport', async ({ page, isMobile }) => {
    await mockExternal(page);
    await page.goto('/student');
    const source = page.locator('#video-demo-source');
    const src = await source.getAttribute('src');
    const expected = isMobile
      ? await source.getAttribute('data-mobile')
      : await source.getAttribute('data-desktop');
    expect(src).toBe(expected);
  });
});
