import {
  BrowserContext,
  expect,
  Locator,
  Page,
} from 'playwright/test';

import { Calendar } from '@calendars/Calendar';
import { CalendarForm } from '@calendars/CalendarForm';

export class HomePage{

    readonly page: Page;
    readonly context: BrowserContext;
    readonly bookThisRoom: Locator;
    readonly calendar: Calendar;
    readonly calendarForm: CalendarForm;
    readonly name: Locator;
    readonly form: Locator;
    readonly email: Locator;
    readonly phone: Locator;
    readonly subject: Locator;
    readonly message: Locator;
    readonly submit: Locator;
    readonly successMessage: Locator;


    constructor(page: Page, context: BrowserContext){
        this.page = page;
        this.context= context;
        this.bookThisRoom = page.getByRole('button', { name: 'Book this room' })
        this.calendar = new Calendar(page,context);
        this.calendarForm = new CalendarForm(this.page, this.context);
        /** main form */
        this.form = page.locator('[class="col-sm-5"] form');
        this.name = this.form.getByTestId('ContactName')
        this.email = this.form.getByTestId('ContactEmail')
        this.phone = this.form.getByTestId('ContactPhone')
        this.subject = this.form.getByTestId('ContactSubject')
        this.message = this.form.getByTestId('ContactDescription')
        this.submit = this.form.getByRole('button', { name: 'Submit' })
        this.successMessage = this.page.getByText('We\'ll get back to you about')



     
      }
      
       goto = async ()=> await this.page.goto("/");
       clickBookRoom = async ()=>await this.bookThisRoom.click()
       verifyTitle = async(title:string|RegExp)=> await expect(this.page).toHaveTitle(title);
       
       fillForm = async (userData: IUser) => {

        await this.name.fill(userData.name);
        await this.email.fill(userData.email);
        await this.phone.fill(userData.phone);
        await this.subject.fill(userData.subject);
        await this.message.fill(userData.message);
      
      }

      verifyForm = async (userData: IUser) => {
        await expect(this.name).toHaveValue(userData.name);
        await expect(this.email).toHaveValue(userData.email);
        await expect(this.phone).toHaveValue(userData.phone);
        await expect(this.subject).toHaveValue(userData.subject);
        await expect(this.message).toHaveValue(userData.message);

    }

    verifySuccessMessage= async() => {

      await this.successMessage.isVisible()
      // await this.page.waitForFunction(async ()=> await this.successMessage.isVisible());

    }
    
};