import {
  BrowserContext,
  expect,
  Locator,
  Page,
} from 'playwright/test';

export class Calendar{
  
      readonly page: Page;
      readonly context: BrowserContext;
      readonly calendar: Locator;
      readonly today: Locator;
      readonly back: Locator;
      readonly next: Locator;
      readonly dateLabel: Locator;
    
  
   
  
      constructor(page: Page, context: BrowserContext){
          this.page = page;
          this.context= context;
          this.calendar = page.locator('.rbc-calendar');
          this.today = page.getByRole('button', { name: 'Today' });
          this.back = page.getByRole('button', { name: 'Back' });
          this.next = page.getByRole('button', { name: 'Next' })
          this.dateLabel = page.locator('.rbc-toolbar-label');
   
        }
        
        visible = async () => await this.calendar.isVisible();
        click = async (button:Locator) => await button.click();
        verifyMonthLabel = async (expectedMonthInd: number) => {
          const actualDateMonthInd = await (new Date(await this.dateLabel.innerText())).getMonth();
          expect(actualDateMonthInd).toEqual(expectedMonthInd);

        }
         
      
  };