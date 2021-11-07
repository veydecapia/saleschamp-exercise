import { browser, by, element, ElementArrayFinder, ElementFinder } from "protractor";
import { BasePage } from "./base.page";


export class CareersPage extends BasePage {

    heroTitle(){
        return element(by.css(".heading-2"));
    }

    heroParagraph(){
        return element.all(by.css("p.paragraph-bigger-2")).get(0);
    }

    applyNowBtn(){
        return element(by.cssContainingText(".button.w-inline-block[href='#careers-section']", "apply now"));
    }

    viewHotRolesBtn(){
        return element(by.css(".button.careers-button.w-inline-block"));
    }

    openPositionsSection(){
        return element(by.id("open-positions"));
    }


    //Hot Role Section

    cardRole(
        index: number
    ){
        return element.all(by.css("#open-positions .div-block.sc-card.roles")).get(index);
    }

    roleNameLbl(
        index: number
    ){
        return this.cardRole(index).element(by.css(".heading-5"));
    }

    roleDescriptionLbl(
        index: number
    ){
        return this.cardRole(index).element(by.css(".paragraph-bigger-2"));
    }

    viewDetailsPlusSignBtn(
        index: number
    ){
        return this.cardRole(index).element(by.css(".button.career-card strong"));
    }

    cardRoleApplyNowBtn(
        index: number
    ){
        return this.cardRole (index).element(by.cssContainingText(".button", "apply now"));
    }


    // Careers Form

    careersFormSection(){
        return element(by.id("wf-form-Careers-Form"));
    }

    applyForARoleLbl(){
        return this.careersFormSection().element(by.cssContainingText(".heading-10","Apply for a role"));
    }

    fillOutInstructionsLbl(){
        return this.careersFormSection().element(by.css(".paragraph"));
    }

    nameTxtbox(){
        return this.careersFormSection().element(by.id("Name---Careers"));
    }

    emailAddressTxtbox(){
        return this.careersFormSection().element(by.id("Email---Careers"));
    }

    messageTxtArea(){
        return this.careersFormSection().element(by.id("Careers-Message"));
    }

    submitBtn(){
        return this.careersFormSection().element(by.css("input.button"));
    }

    formDoneBlock(){
        return element(by.css(".w-form-done div"));
    }


    //Careers Page Actions

    applyForARoleAction = async (
        jsonData: Object, 
        index: number = 0 //Default to first entry index=0
    ): Promise<void> => {
        const data = jsonData[index];

        await this.nameTxtbox().clear();
        await this.nameTxtbox().sendKeys(data.applicantName);
        
        await this.emailAddressTxtbox().clear();
        await this.emailAddressTxtbox().sendKeys(data.applicantEmailAddress);

        await this.messageTxtArea().clear();
        await this.messageTxtArea().sendKeys(data.applicantMessage);

        /**
         * As captcha cannot be automated.
         * Need to request for developer to remove captcha functionality on a testing environment.
         * When dealing with a Production environment, Captcha can temporarily be disabled.
         */

        await this.submitBtn().click();
    }


    // Careers Page Methods & Utilities

    getIndexForARole = async (
        roleName: string
    ): Promise<number> => {
        const el =  element.all(by.css("#open-positions .div-block.sc-card.roles"));
        const count = await el.count()
        let index = 0;
        console.log("Number of Cards Present: " + count);

        //Loop through all displayed cards
        for(let i = 0; i < count; i++){
            if(await this.roleNameLbl(i).getText() === roleName){
                index = i;
                break;
            }
        }
        
        return index;
    }

    
}