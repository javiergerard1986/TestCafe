import { Selector } from 'testcafe';
import { MainPage } from '../pages/MainPage';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { AddPayeePage } from '../pages/AddPayeePage';
import { PayBillsPage } from '../pages/PayBillsPage';

const mainPage: MainPage = new MainPage();
let loginPage: LoginPage;
let homePage: HomePage;
let payBillsPage: PayBillsPage;
let addPayeePage: AddPayeePage;
const VALID_USERNAME: string = 'username';
const VALID_PASSWORD: string = 'password';
const PAYEE_NAME: string = 'NAME';
const PAYEE_ACCOUNT: string = 'ACCOUNT';
const PAYEE_ADDRESS: string = 'ADDRESS';
const PAYEE_DETAILS: string = 'DETAILS';

fixture `New Payment tests`
.page `http://zero.webappsecurity.com`
.beforeEach(async t => {
    // Setting test speed, value between 0.01 and 1
    await t.setTestSpeed(1);
    
    loginPage = await mainPage.signIn();
    homePage = await loginPage.login(VALID_USERNAME, VALID_PASSWORD);
});
test.skip(`User can add new payee to the list`, async t => {
    // Navigate to the "Pay Bills" page
    payBillsPage = await homePage.navigateToPayBillsPage();
    // Navigate to the "Add Payee" page
    addPayeePage = await payBillsPage.navigateToAddPayeePage();
    
    // Add Payee
    await addPayeePage.addPayee(PAYEE_NAME, PAYEE_ADDRESS, PAYEE_ACCOUNT, PAYEE_DETAILS);
    // Validate that the payee was added
    await addPayeePage.validatePaymentCreation(PAYEE_NAME);
});