import { by, element } from "protractor";
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

    roleName(
        index: number
    ){
        return this.cardRole(index).element(by.css(".heading-5"));
    }

    roleDescription(
        index: number
    ){
        return this.cardRole(index).element(by.css(".paragraph-bigger-2"));
    }

    viewDetailsPlusSignButton(
        index: number
    ){
        return this.cardRole(index).element(by.css(".button.career-card strong"));
    }

    cardRoleApplyNowBtn(
        index: number
    ){
        return this.cardRole(index).element(by.cssContainingText(".button", "apply now"));
    }



}