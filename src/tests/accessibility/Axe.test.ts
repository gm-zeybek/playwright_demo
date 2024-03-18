import test from '@pages/index';
import { expect } from '@playwright/test';

test(`Verify Page Accessibility`, async ({ homePage, makeAxeBuilder }) => {
    await homePage.goto();
    const accessibilityScanResults = await makeAxeBuilder.analyze();
    // Automatically uses the shared AxeBuilder configuration,
    expect(accessibilityScanResults.violations).toEqual([]);
});