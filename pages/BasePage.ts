import { t } from 'testcafe';
import { TopBar } from './Components/Bars/TopBar';

export abstract class BasePage {

    protected topBar: TopBar;

    constructor(){
        this.topBar = new TopBar();
    }

    protected getTopBar(): TopBar{
        return this.topBar;
    }

    abstract isPageDisplayed(): Promise<boolean>;

}