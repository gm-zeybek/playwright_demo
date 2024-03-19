import ErrorMessages from 'src/components/enums/Error';
import { DateTime } from 'src/utils/DateTime/DateTime';
import { UserData } from 'src/utils/testData/UserData';

import test from '@pages/index';

test.describe("HomePage test @Smoke", async () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.goto();
  });

  test("user should see calendar view when click book this room button", async ({
    homePage,
    calendar,
  }) => {
    await homePage.verifyTitle(/Restful-booker-platform demo/);
    await homePage.clickBookRoom();
    await calendar.visible();
  });
  test("user should navigate calendar through calendar using pagination button ", async ({
    homePage,
    calendar,
  }) => {
    await homePage.clickBookRoom();
    await calendar.click(calendar.today);
    await calendar.verifyMonthLabel(DateTime.currentMonthInd);
    await calendar.click(calendar.next);
    await calendar.verifyMonthLabel(DateTime.currentMonthInd + 1);
  });
  test("user should be able to fill up information form", async ({
    homePage,
  }) => {
    const user = new UserData();
    await homePage.clickBookRoom();
    await homePage.calendarForm.fillCalendarForm(user);
    await homePage.calendarForm.verifyForm(user);
  });
  test("user should receive error message for invalid input (API + UI) @API", async ({
    homePage,
  }) => {
    const invalidUser = new UserData();
    invalidUser.firstname = ""; // empty string
    invalidUser.lastname = "ab"; // less than 3 letters
    invalidUser.email = "a@"; // unwell formed email
    invalidUser.phone = "0123456789"; // less than 11 phone number

    const expectedMessageList = [
      ErrorMessages.FIRSTNAME_NON_BLANK,
      ErrorMessages.SIZE_BETWEEN_3_N_21,
      ErrorMessages.NON_FORMED_EMAIL,
      ErrorMessages.SIZE_BETWEEN_11_N_21,
    ];

    await homePage.clickBookRoom();
    await homePage.calendarForm.fillCalendarForm(invalidUser);
    await homePage.calendarForm.book.click();
    await homePage.calendarForm.verifyErrorMessages(expectedMessageList);
  });
  test("user should be able to book on calendar", async ({ homePage }) => {
    await homePage.clickBookRoom();
    await homePage.calendar.selectDates(homePage.calendar.firstNight, 7);
    await homePage.calendar.verifyDatesSelected(homePage.calendar.selectedDays,7);
  });
  test("user should be able to submit the form (UI + API) @API", async ({homePage}) => {
    const user = new UserData();
    await homePage.fillForm(user);
    await homePage.verifyForm(user);
    await homePage.submit.click();
    await homePage.verifySuccessMessage();
  });

  test("user should see successfull booking message (API + UI) @API", async ({}) => {
    //
  });

  test("user information should be populated on payload (API) @API", async ({}) => {
    //
  });

  test("user should receive error message for lower input form validation (API + UI) @API", async ({}) => {
    //
  });
});
