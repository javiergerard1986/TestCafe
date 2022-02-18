import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { MainPage } from '../pages/mainPage';

let mainPage: MainPage = new MainPage();
let loginPage: LoginPage;
let homePage: HomePage;
const INVALID_USERNAME: string = 'INVALID_USERNAME';
const INVALID_PASSWORD: string = 'INVALID_PASSWORD';
const VALID_USERNAME: string = 'username';
const VALID_PASSWORD: string = 'password';

fixture `Loging feature test`
.page `http://zero.webappsecurity.com`
.beforeEach(async t => {
    // Setting test speed, value between 0.01 and 1
    await t.setTestSpeed(1);
});
test(`User cannot login with invalid credentials`, async t => {
    // Navigate to the Login page
    loginPage = await mainPage.signIn();
    await t.expect(await loginPage.isPageDisplayed()).ok('Main elements on the "Login" page are not displayed');

    // Attempt to login with invalid credentials
    await loginPage.login(INVALID_USERNAME, INVALID_PASSWORD);
    await t.expect(await loginPage.getInvalidLoginMessage()).contains(`Login and/or password are wrong.`);
});
test(`User can login into application`, async t => {
    // Navigate to the Login page
    loginPage = await mainPage.signIn();
    await t.expect(await loginPage.isPageDisplayed()).ok('Main elements on the "Login" page are not displayed');

    // Login with valid credentials
    homePage = await loginPage.login(VALID_USERNAME, VALID_PASSWORD);
    await t.expect(await homePage.isPageDisplayed()).ok('The Home page is not displayed');

    // Logout from system
    mainPage = await homePage.logout();
    await t.expect(await mainPage.isPageDisplayed()).ok('The Main page is not displayed');
});