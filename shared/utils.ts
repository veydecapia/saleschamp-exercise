import { browser, ElementFinder, Locator } from "protractor";
import * as webdriver from 'selenium-webdriver';
import { DEFAULT_TIMEOUT } from "./config";


// export const urlChanged = async (): Promise<boolean> => {
//     let url = await browser.getCurrentUrl();
//     return url === "https://www.saleschamp.nl/";
// }


// export const waitToBeDisplayed = (
//     target: ElementFinder | Locator | string,
//     timeout: number = DEFAULT_TIMEOUT
// ): webdriver.promise.Promise<boolean> => {
//     let e: ElementFinder = getElementFinder(target);

//     return browser.wait(
//         (): webdriver.promise.Promise<boolean> => {
//             e = getElementFinder(target);
//             log()
//         }
//     )
// }


// export const getElementFinder = (
//     target: ElementFinder | Locator | string
// ): ElementFinder => {

// }