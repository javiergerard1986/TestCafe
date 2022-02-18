import { Selector, t } from "testcafe";
import { BasePage } from "./BasePage";

export class ForgotPasswordPage extends BasePage {
    
    private emailTxt: Selector;
    private sendPasswordBtn: Selector;
    private message: Selector;

    constructor(){
        super();
        this.emailTxt = Selector('#user_email');
        this.sendPasswordBtn = Selector('input').withAttribute('name', 'submit');
        this.message = Selector('div');
    }

    public isPageDisplayed(): Promise<boolean> {
        return this.emailTxt.exists
            && this.sendPasswordBtn.exists;
    }
    
    public async requestPassword(email: string): Promise <boolean>{
        await t.typeText(this.emailTxt, email, { paste: true });
        await t.click(this.sendPasswordBtn);
        return (await this.message.innerText).includes(email);
    }
}