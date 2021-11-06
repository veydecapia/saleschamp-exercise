import { browser, element, by } from "protractor";
import { protractor } from "protractor/built/ptor";
import { BasePage } from "./base.page";
const env = require('../shared/constants/environmentProperties.json');



export class HomePage extends BasePage {
    //Home Page Locators---

    
    //Home Page Actions---
    navigateToHomePage(){
        return browser.get(env.PROD.URL);
    }
} 