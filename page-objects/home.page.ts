import { browser, element, by } from "protractor";
import { protractor } from "protractor/built/ptor";
const env = require('../shared/constants/environmentProperties.json');



export class HomePage {
    //Home Page Locators---
    headerLogo(){
        return element(by.css(".navigation-items img.logo-image-2"));
    }
    


    //Home Page Actions---
    navigateToHomePage(){
        return browser.get(env.PROD.URL);
    }
} 