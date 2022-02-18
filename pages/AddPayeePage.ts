import { Selector, t } from "testcafe";

export class AddPayeePage{

    private name: Selector;
    private address: Selector;
    private account: Selector;
    private details: Selector;
    private submitBtn: Selector;
    private message: Selector;

    constructor(){
        this.name = Selector(`#np_new_payee_name`);
        this.address = Selector(`#np_new_payee_address`);
        this.account = Selector(`#np_new_payee_account`);
        this.details = Selector(`#np_new_payee_details`);
        this.submitBtn = Selector(`#add_new_payee`);
        this.message = Selector(`#alert_content`);
    }

    public async addPayee(name: string, address: string, account: string, details: string){
        await t.typeText(this.name, name, { paste: true });
        await t.typeText(this.address, address, { paste: true });
        await t.typeText(this.account, account, { paste: true });
        await t.typeText(this.details, details, { paste: true });
        await t.click(this.submitBtn);
    }

    public async validatePaymentCreation(payeeName: string): Promise<boolean> {
        return await(this.message.innerText) === 'The new payee ' + payeeName +' was successfully created';
    }

}