const { test, expect } = require('@playwright/test');
const { mockExternal } = require('./helpers');

test.describe('essay feedback doorstop', () => {
  test('submits essay to AI endpoint and renders grade + summary', async ({ page }) => {
    await mockExternal(page, {
      aiResponses: {
        '/essay_feedback': {
          summary: 'Score: 11. Strong thesis and clear structure.',
          line: '[]',
        },
      },
    });
    await page.goto('/doorstops/grades');

    const essay = page.locator('#essay-submission');
    await essay.click();
    await page.keyboard.type('This is my essay about school policy and student voice.');

    await page.locator('#submit-essay').click();

    const response = page.locator('#openAI-response');
    await expect(response).toContainText('Grade: A', { timeout: 10_000 });
    await expect(response).toContainText('Strong thesis');
    // usage counter increments
    expect(
      Number(await page.evaluate(() => localStorage.getItem('openAI-usage-essay')))
    ).toBeGreaterThan(0);
  });

  test('empty submission prompts for text instead of calling the API', async ({ page }) => {
    let called = false;
    await page.route('https://ai.fix.school/**', route => {
      called = true;
      return route.abort();
    });
    await page.route('https://plausible.io/**', route => route.abort());
    await page.goto('/doorstops/grades');

    // clear the contenteditable completely, then submit
    await page.evaluate(() => {
      document.getElementById('essay-submission').innerText = '';
    });
    await page.evaluate(() => submitOpenAIQueryEssay());
    await expect(page.locator('#openAI-response')).toContainText('Add text below');
    expect(called).toBe(false);
  });
});
