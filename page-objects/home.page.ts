import { browser, element, by } from "protractor";
import { BasePage } from "./base.page";
import * as env from '../shared/constants/environmentProperties.json';



export class HomePage extends BasePage {
    //Home Page Locators---

    heroTitle(){
        return element(by.css(".heading-2.hero-title"));
    }

    
    //Home Page Actions---
    navigateToHomePage(){
        return browser.get(env.PROD.URL);
    }
} 