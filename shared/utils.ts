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
    // await waitToBeDisplayed(target, timeout);
    await browser.executeScript(
        "arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'start' });",
        target
    );
}


export const getElementFinder = (
    target: ElementFinder,
): ElementFinder => {
    if(target.hasOwnProperty('parentElementArrayFinder')) {
        return target as ElementFinder;
    }
    return element(target as Locator);
}