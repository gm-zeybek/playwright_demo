import type { Page } from '@playwright/test';
/*eslint-disable notice/notice */
import {
  expect,
  test,
} from '@playwright/test';

test.describe.configure( { mode: 'parallel' });
test.beforeEach( async ( { page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
})

const TODO_ITEMS = [
  'buy some cheese',
  'feed the cat',
  'book a doctors appointment'
]

test.describe('New Todo', () => {
  test('should allow me add todo items', async({page}) => {
    // create a new todo locator
    const newTodo = page.getByPlaceholder('What needs to be done?');
    // create first todo
    await newTodo.fill(TODO_ITEMS[0]);
    await newTodo.press('Enter');
    // make sure list have only one todo
    await expect(page.getByTestId('todo-title')).toHaveText(TODO_ITEMS[0])

        // create second todo
        await newTodo.fill(TODO_ITEMS[1]);
        await newTodo.press('Enter');
        // make sure list have two todos
        await expect(page.getByTestId('todo-title')).toHaveText([TODO_ITEMS[0],TODO_ITEMS[1]])
        await numberOfTodosInLocalStorage(page, 2);
  })
  test('should api return ok', async({page}) => {

    const response = await page.request.get('https://playwright.dev')
    expect(response).toBeOK();
  })
})

async function numberOfTodosInLocalStorage(page: Page, expected: number){
  
  return page.waitForFunction( e =>{
    return JSON.parse(localStorage['react-todos']).length === e;},expected);
}