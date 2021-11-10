import { browser, element, by } from "protractor";
import { BasePage } from "./base.page";
import * as env from '../shared/constants/environmentProperties.json';
import { protractor } from "protractor/built/ptor";
import { DEFAULT_TIMEOUT } from "../shared/config";
import * as pageData from "../test-data/pageData.json";



export class HomePage extends BasePage {
    //Home Page Locators

    heroTitle(){
        return element(by.css(".heading-2.hero-title"));
    }


    
    //Home Page Actions

    navigateToHomePage = async(): Promise<void> =>{
        await browser.manage().window().maximize();
        await browser.get(env.PROD.URL);

        let EC = protractor.ExpectedConditions;
        browser.wait(
            EC.titleIs(pageData.homePage.pageTitle),
            DEFAULT_TIMEOUT
        );
    }
} 