import { BasePage } from "./BasePage";

export class AccountSettingsPage extends BasePage{
    
    constructor(){
        super();
    }

    isPageDisplayed(): Promise<boolean> {
        throw new Error("Out of scope of the excercise");
    }

}