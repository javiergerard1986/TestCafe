import { Selector, t } from "testcafe";
import { BasePage } from "./BasePage";

export class FeedbackPage extends BasePage {
   
    private nameTxt: Selector;
    private emailTxt: Selector;
    private subjectTxt: Selector;
    private commentTxt: Selector;
    private submitBtn: Selector;
    private clearBtn: Selector;
    private message: Selector;

    constructor(){
        super();
        this.nameTxt = Selector(`#name`);
        this.emailTxt = Selector(`#email`);
        this.subjectTxt = Selector(`#subject`);
        this.commentTxt = Selector(`#comment`);
        this.submitBtn = Selector(`input`).withAttribute('value', 'Send Message');
        this.clearBtn = Selector(`input`).withAttribute('value', 'Clear');
        this.message = Selector(`div`);
    }

    isPageDisplayed(): Promise<boolean> {
        return this.nameTxt.exists
            && this.emailTxt.exists
            && this.subjectTxt.exists
            && this.commentTxt.exists
            && this.submitBtn.exists
            && this.clearBtn.exists;
    }

    public async submitFeedback(name: string, email: string, subject: string, comment: string): Promise<boolean> {
        await t.typeText(this.nameTxt, name, { paste: true });
        await t.typeText(this.emailTxt, email, { paste: true });
        await t.typeText(this.subjectTxt, subject, { paste: true });
        await t.typeText(this.commentTxt, comment, { paste: true });
        await t.click(this.submitBtn);
        return await this.message.exists === true
            && (await this.message.innerText).includes('Thank you for your comments, ' + name + '.'); 
    }
    
}