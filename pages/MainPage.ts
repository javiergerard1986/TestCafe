import { Selector, t } from "testcafe";
import { BasePage } from "./BasePage";
import { ITab } from "./Components/Tabs/ITab";
import { FeedbackPage } from "./FeedbackPage";
import { LoginPage } from "./LoginPage";

export enum MainPageTabs{
    HOME = 'HOME',
    ONLINE_BANKING = 'ONLINE BANKING',
    FEEDBACK = 'FEEDBACK',
}

export enum MainPageTabSelectors{
    HOME = '#homeMenu',
    ONLINE_BANKING = '#onlineBankingMenu',
    FEEDBACK = '#feedback',
}

export class MainPage extends BasePage implements ITab{

    tabs: Map<string, string>;
    private resultsTitle: Selector;
    private resultLink: Selector;

    // Constructor
    constructor(){
        super();
        this.loadTabs();
        this.resultsTitle = Selector('h2');
        this.resultLink = Selector('a');
    }

    loadTabs(): void {
        this.tabs = new Map<string, string>();
        this.tabs.set(MainPageTabs.HOME, MainPageTabSelectors.HOME);
        this.tabs.set(MainPageTabs.ONLINE_BANKING, MainPageTabSelectors.ONLINE_BANKING);
        this.tabs.set(MainPageTabs.FEEDBACK, MainPageTabSelectors.FEEDBACK);
    }

    async navigateToFeedbackPage(): Promise<FeedbackPage>{
        await this.navigateToTab(MainPageTabs.FEEDBACK);
        return new FeedbackPage();
    }

    async navigateToTab(tabName: string){
        await t.click(this.tabs.get(tabName));
    }

    public async signIn(): Promise<LoginPage>{
        await this.topBar.signIn();
        return new LoginPage();
    }

    public async search(item: string){
        await t.typeText(this.topBar.getSearchTxt(), item, { paste: true });
        await t.pressKey('enter');
    }

    public async validateSearch(item: string): Promise<boolean> {
        return this.resultsTitle.exists
            && this.resultLink.exists;
    }

    public async isPageDisplayed(): Promise<boolean> {
        return this.topBar.userIsNotLoggedIn();
    }

}