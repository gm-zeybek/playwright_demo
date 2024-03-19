

![image](https://github.com/gm-zeybek/playwright_demo/assets/72822629/1d8ce941-d7d1-4c17-addc-eb64506bfcb3)

![image](https://github.com/gm-zeybek/playwright_demo/assets/72822629/83a88211-a8bf-4095-af65-9fd85e397923)

<!-- TABLE OF CONTENTS -->
<h2>
    <details open="open">
        <summary class="normal">Table of Contents</summary>
        <h5>
          <ol>
            <li>
              <a href="#about-the-project">About the Project</a>
              <ul>
                <li><a href="#built-with">Built With</a>
              </ul>
            </li>
            <li>
              <a href="#getting-started">Getting Started</a>
              <ul>
                <li><a href="#prerequisites">Prerequisites</a>
                <li><a href="#installation">Installation</a>
              </ul>
            </li>
            <li><a href="#usage">Usage</a></li>
            <li><a href="#reports">Reports</a></li>
            <li><a href="#docker">Docker</a></li>
            <li><a href="#github-workflow">github-workflow</a></li>
            <li><a href="#github-pages">github-pages</a></li>
          </ol>
        </h5>    
    </details>
</h2>

<!-- ABOUT THE PROJECT -->

## About the Project

Playwright Demo - This project is based on Microsoft Playwright which enables reliable end-to-end testing for modern web apps.

Top Features:

- Easy to Configure.
- Auto-waits for all the relevant checks to pass and only then performs the requested action.
- Records videos for Test Cases.
- Records the test script and every action on the target page is turned into generated script.
- Generates trace file, which gives in-depth details of Test Case execution.
- Execution of test case is faster when compared with other competitive framework in market.
- Supports Headful/Headless mode execution for Firefox/Webkit/Google Chrome/Chromium/MS Edge on Windows/Linux/Mac machines.
- It supports API testing (From Playwright version 1.16 onwards)
- It can be used to simulate browser behaviour on mobile devices, and supports over 100+ devices.
- It has ability to produce and visually compare screenshots.
- To slow down execution slowMo option is available.
- Supports 'download' event monitoring, so there is no need for user to actually wait for downloads to finish.
- Supports Serial and Parallel execution.
- HTML Reports are generated after execution with an option to capture screenshot/video/trace file on failure.
- Nonetheless Support from Microsoft so FREQUENT RELEASES and turn arounf time for any queries is 48 hours.


### Built With

- [Playwright](https://playwright.dev)
- [Typescript](https://www.typescriptlang.org/)
- [pdfjs-dist-es5](https://www.npmjs.com/package/pdfjs-dist-es5)

## Getting Started

### Prerequisites

The following software are required:

- nodejs : Download and Install Node JS from
  ```sh
  https://nodejs.org/en/download/
  ```
  
  - yarn : Install yarn
  ```sh
  npm install --global yarn
  ```

### Installation

1. Clone the repo using below URL

```sh
git clone https://github.com/gm-zeybek/playwright_demo.git
```

2. Navigate to folder and install packages using yarn:

```sh
yarn install
```
3. For first time installation run below command to download required browsers

```sh
yarn playwright install
```

<!-- USAGE EXAMPLES-->

## Usage

1. For Browser Configuration, change required parameters in `playwright.config.ts`.
2. For execution entire test suite on all available browsers simultaneously execute below command :

```JS
yarn run test
```

3. For executing API test cases :

```JS
yarn run test:api
```

4. For recording test scripts :

```JS
yarn run test:record
```

5. To produce and visually compare screenshots execute below command. On first execution reference screenshot will be generated for comparision with subsequent runs.

```JS
yarn run test:visual 
```

6. For HTML Report generation execute below command , single static HTML report(index.html) which can be sent via email is generated in "html-report" folder:
7. For debugging test cases add debug points, the press CNTRL+SHIFT+P and type "debug:debug npm script", on the edit box select desired script.
8. Screenshots, Videos and Trace files will be generated in test-results folder.
9. For viewing trace files, go to folder where `trace.zip` is generated and execute :
```JS
npx playwright show-trace trace.zip
```

10. UI mode in Playwright is lets you explore, run and debug tests, it comes with a built-in watch mode. It opens like Traceviewer where you can use the window to find selectors, its directly integrated to VS Code, all the browsers definned in playwright config will be automatically picked up and you can chosse to run individual test cases in browser of choice and also we can run tests directly from UI mode instead of IDE. I have used the tag `@Smoke` in `test:ui` section of package.json, because all my UI test cases are tagged with `@Smoke` tag and we want to run only Web based test cases. To use UI mode use below command with `ENV` value of your choice

```JS
yarn run test:ui 
```


11. For Extracting text from PDF we are using `pdfjs-dist-es5` library. You can run the test case `PdfToText.test.ts` to verify contents of PDF file. `getPDFText()` method in `lib/WebActions.ts` class is used for extracting text from PDF file.

12. Accessibility test case is written in `tests/accessibility/Axe.test.ts`, to run this test use the command
```JS
 yarn run test:accessibility 
```

13. GitHub Actions is configured in `.github/workflows/playwright.yml` file and events(trigger points) are set to pus/pull actions on master branch. Changes in command to run test cases can be made in "Run tests" section in this file.


## Docker container
  14. For running the tests on Docker container we have to first build a image from Dockerfile and then run the image to container on which the test scripts will run.

- build docker image
```JS
 yarn run docker:build 
```
- run test on running image
```JS
 yarn run docker:test 
```
- push image to repo
```JS
 yarn run docker:push 
```
- pull image from repo
```JS
 yarn run docker:pull 
```
## Running pipeline and viewing report
![image](https://github.com/gm-zeybek/playwright_demo/assets/72822629/4dd7678f-547b-4184-8071-a1ae4e605068)

![image](https://github.com/gm-zeybek/playwright_demo/assets/72822629/6c6d6f1b-1554-4075-8328-5b3185c5e199)

![image](https://github.com/gm-zeybek/playwright_demo/assets/72822629/d17ab3dd-0b92-4aa7-a81d-cd7746527164)



