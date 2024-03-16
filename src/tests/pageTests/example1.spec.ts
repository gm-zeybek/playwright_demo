import {
  expect,
  test,
} from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

test.only('get automation testing online', async ({ page }) => {
  await page.goto('https://automationintesting.online/');
  // Click the get started link.
  // await page.getByRole('link', { name: 'Get started' }).click();

  await expect( page.getByRole('form')).toBeTruthy();
  let ContactName = await page.getByTestId('ContactName');
  await expect(ContactName).toBeEnabled();


  // Expects page to have a heading with the name of Installation.
  // await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
