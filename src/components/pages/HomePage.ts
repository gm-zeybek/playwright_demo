import {
  BrowserContext,
  expect,
  Locator,
  Page,
} from 'playwright/test';

export class HomePage{

    readonly page: Page;
    readonly context: BrowserContext;
    readonly bookThisRoom: Locator;
    readonly calendar: Locator;

    constructor(page: Page, context: BrowserContext){
        this.page = page;
        this.context= context;
        this.bookThisRoom = page.getByRole('button', { name: 'Book this room' })
     
      }
      
       goto = async ()=> await this.page.goto("/");
       clickBookRoom = async ()=>await this.bookThisRoom.click()
       verifyTitle = async(title:string|RegExp)=> await expect(this.page).toHaveTitle(title);
       
    
};