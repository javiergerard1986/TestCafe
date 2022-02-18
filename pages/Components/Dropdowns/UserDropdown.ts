import { t, Selector } from "testcafe";
import { MainPage } from "../../mainPage";

export class UserDropdown {
    
    private mainOpt: Selector;
    private myProfileOpt: Selector;
    private logoutOpt: Selector;
    
    constructor() {
        this.mainOpt = Selector('.icon-user');
        this.myProfileOpt = Selector('a').withExactText('My Profile');
        this.logoutOpt = Selector('#logout_link');
    }

    /*public async navigateToMyProfile(): Promise<MyProfilePage>{
        await this.openUserDropdown();
        await t.click(this.myProfileOpt);
        return new MyProfilePage();
    }*/

    public async logout(): Promise<MainPage>{
        await this.openUserDropdown();
        await t.click(this.logoutOpt);
        return new MainPage();
    }

    public isUserDropdownDisplayed(): Promise<boolean> {
        return this.mainOpt.exists;
    }

    private async openUserDropdown(){
        await t.click(this.mainOpt);
    }

}