// Shared test helpers: block/mock external services so tests are deterministic
// and never send real analytics events or AI requests.

/**
 * Blocks Plausible analytics and mocks ai.fix.school endpoints.
 * The pages define a `window.plausible` queue stub inline, so blocking the
 * real script is safe.
 * @param {import('@playwright/test').Page} page
 * @param {{ aiResponses?: Record<string, any> }} [opts] map of pathname -> JSON body
 */
async function mockExternal(page, opts = {}) {
  await page.route('https://plausible.io/**', route => route.abort());
  await page.route('https://www.tiktok.com/**', route => route.abort());
  await page.route('https://ai.fix.school/**', route => {
    const pathname = new URL(route.request().url()).pathname;
    const body = opts.aiResponses && opts.aiResponses[pathname];
    if (body !== undefined) {
      return route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(body),
      });
    }
    return route.abort();
  });
}

/** Marks onboarding as done so the dashboard renders the returning-user view. */
async function skipOnboarding(page) {
  await page.addInitScript(() => {
    localStorage.setItem('onboardingDone', 'true');
  });
}

module.exports = { mockExternal, skipOnboarding };
