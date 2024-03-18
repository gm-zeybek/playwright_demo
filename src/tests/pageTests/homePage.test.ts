import { DateTime } from 'src/utils/DateTime/DateTime';

import test from '@pages/index';

test.describe('HomePage test @Smoke', async ()=>{

  test.beforeEach(async({homePage})=>{
    await homePage.goto();
  })
  
test('user should see calendar view when click book this room button', async ({ homePage,calendar }) => {

  
  await homePage.verifyTitle(/Restful-booker-platform demo/);
  await homePage.clickBookRoom();
  await calendar.visible();
  

});
test('user should navigate calendar through calendar using pagination button ', async ({ homePage,calendar }) => {

  await homePage.clickBookRoom();
  await calendar.click(calendar.today);
  await calendar.verifyMonthLabel(DateTime.currentMonthInd); 
  await calendar.click(calendar.next);
  await calendar.verifyMonthLabel(DateTime.currentMonthInd+1);  

});
test('user should be able to fill up information form', async ({  }) => {

  //

});
test('user should receive error message for upper input form validation (API + UI) @API', async ({  }) => {

  //

});
test('user should be able to mark on calendar', async ({  }) => {

 //

});
test('user should be able to enter information lower form entry and submit the form (UI + API) @API', async ({  }) => {

  //

});

test('user should see successfull booking message (API + UI) @API', async ({  }) => {

  //

});

test('user information should be populated on payload (API) @API', async ({  }) => {

 //

});

test('user should receive error message for lower input form validation (API + UI) @API', async ({  }) => {

 //

});
});

