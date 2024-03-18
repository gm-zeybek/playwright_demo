import AxeBuilder from '@axe-core/playwright';
import { Calendar } from '@calendars/Calendar';
import { CalendarForm } from '@calendars/CalendarForm';
import { HomePage } from '@pages/HomePage';
import { test as baseTest } from '@playwright/test';

const test =  baseTest.extend<{
    homePage: HomePage;
    calendar: Calendar;
    calendarForm: CalendarForm;
    makeAxeBuilder: AxeBuilder;
  }>({
    homePage:  async ({ page, context }, use) =>{
       await use(new HomePage(page, context ));
    },
    calendar:  async ({ page, context }, use) =>{
      await use(new Calendar(page, context ));
   },
       calendarForm:  async ({ page, context }, use) =>{
      await use(new CalendarForm(page, context ));
   },
   makeAxeBuilder: async ({ page }, use) => {
    await use(new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .exclude('#commonly-reused-element-with-known-issue'));
}
  })

  export default test;

