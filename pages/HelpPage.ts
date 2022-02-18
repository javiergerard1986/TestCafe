import { BasePage } from "./BasePage";

export class HelpPage extends BasePage{
    
    isPageDisplayed(): Promise<boolean> {
        throw new Error("Out of scope of the excercise");
    }

    constructor(){
        super();
    }

}