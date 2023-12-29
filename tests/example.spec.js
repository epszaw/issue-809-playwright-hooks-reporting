// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeAll(() => {
  console.log("before all hook")
})

test.beforeEach(() => {
  console.log("before each hook")
})

test.afterAll(() => {
  console.log("after all hook")
})

test.afterEach(() => {
  console.log("after each hook")
})

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
