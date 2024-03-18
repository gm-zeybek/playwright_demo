import {
  BrowserContext,
  Locator,
  Page,
} from 'playwright/test';

export class CalendarForm{
    
        readonly page: Page;
        readonly context: BrowserContext;
        readonly firstName: Locator;
        readonly lastName: Locator;
        readonly email: Locator;
        readonly phone: Locator;

     
    
        constructor(page: Page, context: BrowserContext){
            this.page = page;
            this.context= context;
            this.firstName = page.getByPlaceholder('Firstname');
            this.lastName = page.getByPlaceholder('Lastname');
            this.email = page.getByPlaceholder('Email');
            this.phone = page.getByPlaceholder('Phone');
    
          }
          
          visible = async () => await this.calendar.isVisible();
  
  
           
        
    };