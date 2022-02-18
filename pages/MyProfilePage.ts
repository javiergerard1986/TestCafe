import { BasePage } from "./BasePage";

export class MyProfilePage extends BasePage{
    
    isPageDisplayed(): Promise<boolean> {
        throw new Error("Out of scope of the excercise");
    }
    
    constructor() {
        super();
    }

}