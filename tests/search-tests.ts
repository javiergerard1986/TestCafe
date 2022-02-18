import { MainPage } from '../pages/MainPage';

const mainPage: MainPage = new MainPage();
const ITEM_TO_SEARCH: string = 'online banking';
const ITEM_RESULT: string = 'Zero - Free Access to Online Banking';

fixture `SearchBox tests`
.page `http://zero.webappsecurity.com`
.beforeEach(async t => {
    // Setting test speed, value between 0.01 and 1
    await t.setTestSpeed(1);
});
test(`User can search for information using search box`, async t => {
    await mainPage.search(ITEM_TO_SEARCH);
    await t.expect(await mainPage.validateSearch(ITEM_RESULT)).ok('The search did not get results');
});