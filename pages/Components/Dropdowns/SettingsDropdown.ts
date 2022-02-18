import { Selector, t } from "testcafe";

export class SettingsDropdown {
    
    private mainOpt: Selector;
    private accountSettingsOpt: Selector;
    private privacySettingsOpt: Selector;
    private helpOpt: Selector;
    
    constructor() {
        this.mainOpt = Selector('.icon-cog');
        this.accountSettingsOpt = Selector('a').withExactText('Account Settings');
        this.privacySettingsOpt = Selector('a').withExactText('Privacy Settings');
        this.helpOpt = Selector('#help_link');
    }

    /*public async navigateToAccountSettings(): Promise<AccountSettingsPage>{
        await this.openSettingsDropdown();
        await t.click(this.accountSettingsOpt);
        return new AccountSettingsPage();
    }

    public async navigateToPrivacySettings(): Promise<PrivacySettingsPage>{
        await this.openSettingsDropdown();
        await t.click(this.privacySettingsOpt);
        return new PrivacySettingsPage();
    }

    private async navigateToHelp(): Promise<HelpPage>{
        await t.click(this.mainOpt);
        await t.click(this.helpOpt);
        return new HelpPage();
    }*/

    private async openSettingsDropdown(){
        await t.click(this.mainOpt);
    }

    public isSettingsDropdownDisplayed(): Promise<boolean> {
        return this.mainOpt.exists;
    }

}