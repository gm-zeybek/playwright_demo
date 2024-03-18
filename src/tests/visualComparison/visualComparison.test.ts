import test from '@pages/index';
import { expect } from '@playwright/test';

test(`Verify Elements Page.`, async ({ homePage }) => {
    await homePage.goto();
    expect(await homePage.page.screenshot()).toMatchSnapshot('MainPage.png');
});