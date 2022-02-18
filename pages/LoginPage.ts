import { Selector, t } from 'testcafe';
import { BasePage } from './BasePage';
import { HomePage } from './HomePage';
import { ForgotPasswordPage } from './ForgotPasswordPage';

export class LoginPage extends BasePage{

    // Attributes
    private loginForm: Selector;
    private usernameTxt: Selector;
    private passwordTxt: Selector;
    private loginBtn: Selector;
    private invalidLoginMsg: Selector;
    private forgotPasswordLnk: Selector;

    constructor(){
        super();
        this.loginForm = Selector(`#login_form`);
        this.usernameTxt = Selector(`#user_login`);
        this.passwordTxt = Selector(`#user_password`);
        this.loginBtn = Selector(`.btn-primary`);
        this.invalidLoginMsg = Selector(`.alert-error`);
        this.forgotPasswordLnk = Selector(`a`).withText(`Forgot your password ?`);
    };

    // Properties
    public getLoginForm(): Selector {
        return this.loginForm;
    }

    public getUsernameTxt(): Selector {
        return this.usernameTxt;
    }

    public getPasswordTxt(): Selector {
        return this.passwordTxt;
    }

    public getLoginBtn(): Selector {
        return this.loginBtn;
    }

    public async login(username: string, password: string): Promise<HomePage>{
        await t.typeText(this.usernameTxt, username);
        await t.typeText(this.passwordTxt, password);
        await t.click(this.loginBtn);
        return new HomePage();
    }

    public async isPageDisplayed(): Promise<boolean>{
        return this.loginForm.exists
            && this.usernameTxt.exists
            && this.passwordTxt.exists
            && this.loginBtn.exists;
    }

    public async getInvalidLoginMessage(): Promise <string>{
        return await this.invalidLoginMsg.innerText;
    }

    public async navigateToForgotPasswordPage(): Promise<ForgotPasswordPage> {
        await t.click(this.forgotPasswordLnk);
        return new ForgotPasswordPage();
    }

}