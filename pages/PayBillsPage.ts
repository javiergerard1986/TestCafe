import { Selector, t } from "testcafe";
import { AddPayeePage } from "./AddPayeePage";
import { ITab } from "./Components/Tabs/ITab";

export enum PayBillsPageTabs{
    PAY_SAVED_PAYEE = 'Pay Saved Payee',
    ADD_NEW_PAYEE = 'Add New Payee',
    PURCHASE_FOREIGN_CURRENCY = 'Purchase Foreign Currency'
}

export class PayBillsPage implements ITab{

    tabs: Map<string, string>;

    constructor(){
        this.loadTabs();
    }

    public async navigateToAddPayeePage(): Promise<AddPayeePage>{
        await this.navigateToTab(PayBillsPageTabs.ADD_NEW_PAYEE);
        return new AddPayeePage();
    }

    loadTabs(): void {
        this.tabs = new Map<string, string>();
        this.tabs.set(PayBillsPageTabs.PAY_SAVED_PAYEE, PayBillsPageTabs.PAY_SAVED_PAYEE);
        this.tabs.set(PayBillsPageTabs.ADD_NEW_PAYEE, PayBillsPageTabs.ADD_NEW_PAYEE);
        this.tabs.set(PayBillsPageTabs.PURCHASE_FOREIGN_CURRENCY, PayBillsPageTabs.PURCHASE_FOREIGN_CURRENCY);
    }

    async navigateToTab(tabName: string){
        await t.click(Selector(`a`).withText(this.tabs.get(tabName)));
    }

}