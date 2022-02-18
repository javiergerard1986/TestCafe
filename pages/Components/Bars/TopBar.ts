import { t, Selector } from "testcafe";
import { MainPage } from "../../mainPage";
import { SettingsDropdown } from "../Dropdowns/SettingsDropdown";
import { UserDropdown } from "../Dropdowns/UserDropdown";


export class TopBar {

    private zeroBankLogo: Selector;
    private searchTxt: Selector;
    private signInBtn: Selector;
    private settingsDd: SettingsDropdown;
    private userDd: UserDropdown;

    constructor(){
        this.zeroBankLogo = Selector('a').withExactText('Zero Bank');
        this.searchTxt = Selector('#searchTerm');
        this.signInBtn = Selector('#signin_button');
        this.settingsDd = new SettingsDropdown();
        this.userDd = new UserDropdown();
    }

    public getZeroBankLogo(): Selector{
        return this.zeroBankLogo;
    }

    public getSearchTxt(): Selector{
        return this.searchTxt;
    };

    public getSettingsDd(): SettingsDropdown{
        return this.settingsDd;
    };

    public getUserDd(): UserDropdown{
        return this.userDd;
    };

    public async signIn(){
        await t.click(this.signInBtn);
    }

    public async logout(){
        return await this.userDd.logout();
    }

    public async userIsNotLoggedIn(): Promise<boolean> {
        return this.signInBtn.exists;
    }

    public async isUserLogged(): Promise<boolean> {
        return await this.userDd.isUserDropdownDisplayed()
            && await this.settingsDd.isSettingsDropdownDisplayed();
    }

}