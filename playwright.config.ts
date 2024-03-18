import { testConfig } from 'testConfig';

import {
  defineConfig,
  devices,
} from '@playwright/test';

const ENV = process.env.nmp_config_ENV;

// if (!ENV || ![`qa`, `dev`, `qaApi`, `devApi`].includes(ENV)) {
//   console.log('env=' + ENV)
//   console.log(`Please provide a correct environment value after command like "--ENV=qa|dev|qaApi|devApi"`);
//   process.exit();
// }
/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './src/tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  
  
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    trace: 'on-first-retry',
    headless: true,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'],

      //Picks Base Url based on User input
      baseURL: testConfig.qa,

      //Browser Mode
      headless: true,

      //Browser height and width
      viewport: { width: 1500, height: 730 },
      ignoreHTTPSErrors: true,

      //Enable File Downloads in Chrome
      acceptDownloads: true,

      //Artifacts
      screenshot: `only-on-failure`,
      video: `retain-on-failure`,
      trace: `retain-on-failure`,

      //Slows down execution by ms
      launchOptions: {
        slowMo: 0
      }
    }},

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'],
      //Picks Base Url based on User input
      baseURL: testConfig.qa,

      //Browser Mode
      headless: true,

      //Browser height and width
      viewport: { width: 1500, height: 730 },
      ignoreHTTPSErrors: true,

      //Enable File Downloads in Chrome
      acceptDownloads: true,

      //Artifacts
      screenshot: `only-on-failure`,
      video: `retain-on-failure`,
      trace: `retain-on-failure`,

      //Slows down execution by ms
      launchOptions: {
        slowMo: 0
      }
     },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'],
    //Picks Base Url based on User input
    baseURL: testConfig.qa,

    //Browser Mode
    headless: true,

    //Browser height and width
    viewport: { width: 1500, height: 730 },
    ignoreHTTPSErrors: true,

    //Enable File Downloads in Chrome
    acceptDownloads: true,

    //Artifacts
    screenshot: `only-on-failure`,
    video: `retain-on-failure`,
    trace: `retain-on-failure`,

    //Slows down execution by ms
    launchOptions: {
      slowMo: 0
    } },
    },

  ],
});
