import {
  BrowserContext,
  expect,
  Locator,
  Page,
} from 'playwright/test';

import ErrorMessage from '../enums/Error';

export class CalendarForm{
    
        readonly page: Page;
        readonly context: BrowserContext;
        readonly firstName: Locator;
        readonly lastName: Locator;
        readonly email: Locator;
        readonly phone: Locator;
        readonly alerts: Locator;
        readonly book: Locator;
        readonly cancel: Locator;
       

     
    
        constructor(page: Page, context: BrowserContext){
            this.page = page;
            this.context= context;
            /** calendar form */
            this.firstName = page.getByPlaceholder('Firstname');
            this.lastName = page.getByPlaceholder('Lastname');
            this.email = page.locator('input[name="email"]');
            this.phone = page.locator('input[name="phone"]');
            this.book = page.getByRole('button', { name: 'Book' });
            this.cancel = page.getByRole('button', { name: 'Cancel' });
            this.alerts = page.locator('.alert p');
          }
          
          fillCalendarForm = async (userData: IUser) => {

            await this.firstName.fill(userData.firstname);
            await this.lastName.fill(userData.lastname);
            await this.email.fill(userData.email);
            await this.phone.fill(userData.phone);
          
          }

          verifyForm = async (userData: IUser) => {
              await expect(this.firstName).toHaveValue(userData.firstname);
              await expect(this.lastName).toHaveValue(userData.lastname);
              await expect(this.email).toHaveValue(userData.email);
              await expect(this.phone).toHaveValue(userData.phone);

          }

          verifyErrorMessages = async( errorList: ErrorMessage[])=>{
             for(const alert of await this.alerts.all()){ 
               expect(errorList).toContain(alert);
             }
           
          }
           
        
    };