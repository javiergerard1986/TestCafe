import { ForgotPasswordPage } from '../pages/ForgotPasswordPage';
import { LoginPage } from '../pages/LoginPage';
import { MainPage } from '../pages/mainPage';

let mainPage: MainPage = new MainPage();
let loginPage: LoginPage;
let forgotPasswordPage: ForgotPasswordPage;
const EMAIL: string = 'email@random.com';

fixture `Send forgotten password feature`
.page `http://zero.webappsecurity.com`
.beforeEach(async t => {
    // Setting test speed, value between 0.01 and 1
    await t.setTestSpeed(1);
});
test(`User can request new password to be send to his email`, async t => {
    // Navigate to the Login page
    loginPage = await mainPage.signIn();
    await t.expect(await loginPage.isPageDisplayed()).ok('Main elements on the "Login" page are not displayed');
    
    // Navigate to the Forgot Password page
    forgotPasswordPage = await loginPage.navigateToForgotPasswordPage();
    await t.expect(await forgotPasswordPage.isPageDisplayed()).ok('The "Forgto Password" page is not displayed');

    // Request password
    await t.expect(await forgotPasswordPage.requestPassword(EMAIL)).ok('The password was nor requested');
});