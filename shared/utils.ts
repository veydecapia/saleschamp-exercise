import { browser, element, ElementFinder, Locator } from "protractor";
import { protractor } from "protractor/built/ptor";
import * as webdriver from 'selenium-webdriver';
import { DEFAULT_TIMEOUT } from "./config";





export const getElementAttributeValue = async (
    target: ElementFinder,
    attr: string
): Promise<string> => {
    return await target.getAttribute(attr);
}


export const waitElementToBeClickable = async (
    target: ElementFinder,
    timeout: number = DEFAULT_TIMEOUT
): Promise<void> => {
    await browser.wait(
        protractor.ExpectedConditions.elementToBeClickable(target),
        timeout,
        'Element ${target.locator()} not clickable'
    )
}


export const scrollToElement = async (
    target: ElementFinder,
    timeout: number = DEFAULT_TIMEOUT
): Promise<void> => {
    await browser.executeScript(
        'arguments[0].scrollIntoView(false);',
        target
    );
}


export const waitToBeDisplayed = (
    target: ElementFinder,
    timeout: number = DEFAULT_TIMEOUT
): webdriver.promise.Promise<boolean> => {
    let e: ElementFinder = getElementFinder(target);

    return browser.wait(
        (): webdriver.promise.Promise<boolean> => {
            e = getElementFinder(target);
            // log()

            return e
                .isPresent()
                .then(
                    (value: boolean) => {
                        if(!value) {
                            return false;
                        }
                        return e.isDisplayed();
                    },
                    () => false
                )
                .then(
                    (value: boolean) => value,
                    () => false
                );
        },
        timeout,
        "Element ${e.locator()} is not present nor displayed"
    );
}



// export const urlChanged = async (): Promise<boolean> => {
//     let url = await browser.getCurrentUrl();
//     return url === "https://www.saleschamp.nl/";
// }



export const getElementFinder = (
    target: ElementFinder,
): ElementFinder => {
    if(target.hasOwnProperty('parentElementArrayFinder')) {
        return target as ElementFinder;
    }
    return element(target as Locator);
}