import {
  BrowserContext,
  expect,
  Locator,
  Page,
} from 'playwright/test';

export class Calendar {
  readonly page: Page;
  readonly context: BrowserContext;
  readonly calendar: Locator;
  readonly today: Locator;
  readonly back: Locator;
  readonly next: Locator;
  readonly dateLabel: Locator;
  readonly firstNight: Locator;
  readonly calendarDays: Locator;
  readonly selectedDays: Locator;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
    this.calendar = page.locator(".rbc-calendar");
    this.today = page.getByRole("button", { name: "Today" });
    this.back = page.getByRole("button", { name: "Back" });
    this.next = page.getByRole("button", { name: "Next" });
    this.calendarDays = page.locator('.rbc-day-bg');
    this.firstNight = this.calendarDays.nth(6);
    this.dateLabel = page.locator(".rbc-toolbar-label");
    this.selectedDays = page.locator('[class="rbc-event-content"]');
  }

  visible = async () => await this.calendar.isVisible();
  click = async (button: Locator) => await button.click();
  verifyMonthLabel = async (expectedMonthInd: number) => {
    const actualDateMonthInd = new Date(
      await this.dateLabel.innerText()
    ).getMonth();
    expect(actualDateMonthInd).toEqual(expectedMonthInd);
  };

  selectDates = async(firstNight: Locator, day: number) => {
    await firstNight.dragTo(this.calendarDays.nth(6+day));
  }

  verifyDatesSelected = async(selectedDays: Locator, night: number) => {
    for(const day of await selectedDays.all()){ 
    await expect( day).toContainText(`${night} night(s)`)
  }
}
}
