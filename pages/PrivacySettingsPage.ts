import { BasePage } from "./BasePage";

export class PrivacySettingsPage extends BasePage{
    
    constructor(){
        super();
    }

    isPageDisplayed(): Promise<boolean> {
        throw new Error("Out of scope of the excercise");
    }

}