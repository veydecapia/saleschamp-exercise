import { element, by } from "protractor";


export class BasePage {


    //Header Navigation Elements
    
    navigationHeaderItems(){
        return element(by.css(".navigation-items"));
    }

    headerLogo(){
        return this.navigationHeaderItems().element(by.css(".logo-image-2"));
    }

    careersLink(){
        return this.navigationHeaderItems().element(by.css(".navigation-item-2.careers-link"));
    }

    pricingLink(){
        return this.navigationHeaderItems().element(by.cssContainingText(".navigation-item-2.w-nav-link", "pricing"));
    }

    contactUsLink(){
        return this.navigationHeaderItems().element(by.cssContainingText(".navigation-item-2.w-nav-link", "contact us"));
    }
}