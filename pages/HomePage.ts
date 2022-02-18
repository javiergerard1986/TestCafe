import { t } from "testcafe";
import { BasePage } from "./BasePage";
import { ITab } from "./Components/Tabs/ITab";
import { MainPage } from "./mainPage";
import { PayBillsPage } from "./PayBillsPage";

export enum HomePageTabs{
    MAP_ACCOUNT = 'Map Account',
    SUMMARY = 'Summary',
    ACCOUNT_ACTIVITY = 'Account Activity',
    TRANSFER_FUNDS = 'Transfer Funds',
    PAY_BILLS = 'Pay Bills',
    MY_MONEY_MAP = 'My Money Map',
    ONLINE_STATEMENTS = 'Online Statements'
}

export enum HomePageTabSelectors{
    MAP_ACCOUNT_SELECTOR = '#map_account_tab',
    SUMMARY_SELECTOR = '#summary_tab',
    ACCOUNT_ACTIVITY_SELECTOR = '#acount_activity_tab',
    TRANSFER_FUNDS_SELECTOR = '#transfer_funds_tab',
    PAY_BILLS_SELECTOR = '#pay_bills_tab',
    MY_MONEY_MAP_SELECTOR = '#my_money_map_tab',
    ONLINE_STATEMENTS_SELECTOR = '#map_online_statements'
}

export class HomePage extends BasePage implements ITab{

    tabs: Map<string, string>;

    constructor(){
        super();
        this.loadTabs();
    };

    public async isPageDisplayed(): Promise<boolean> {
       return this.topBar.isUserLogged();
    }

    public async logout(): Promise<MainPage> {
        await this.topBar.logout();
        return new MainPage();
    }

    public async navigateToPayBillsPage(): Promise<PayBillsPage>{
        await this.navigateToTab(HomePageTabs.PAY_BILLS);
        return new PayBillsPage();
    }

    loadTabs() {
        this.tabs = new Map<string, string>();
        this.tabs.set(HomePageTabs.MAP_ACCOUNT, HomePageTabSelectors.MAP_ACCOUNT_SELECTOR);
        this.tabs.set(HomePageTabs.SUMMARY, HomePageTabSelectors.SUMMARY_SELECTOR);
        this.tabs.set(HomePageTabs.ACCOUNT_ACTIVITY, HomePageTabSelectors.ACCOUNT_ACTIVITY_SELECTOR);
        this.tabs.set(HomePageTabs.TRANSFER_FUNDS, HomePageTabSelectors.TRANSFER_FUNDS_SELECTOR);
        this.tabs.set(HomePageTabs.PAY_BILLS, HomePageTabSelectors.PAY_BILLS_SELECTOR);
        this.tabs.set(HomePageTabs.MY_MONEY_MAP, HomePageTabSelectors.MY_MONEY_MAP_SELECTOR);
        this.tabs.set(HomePageTabs.ONLINE_STATEMENTS, HomePageTabSelectors.ONLINE_STATEMENTS_SELECTOR);
    }

    async navigateToTab(tabName: string){
        await t.click(this.tabs.get(tabName));
    }

}