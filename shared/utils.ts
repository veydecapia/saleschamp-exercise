import { browser, element, ElementFinder, Locator } from "protractor";
import { protractor } from "protractor/built/ptor";
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
        "arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'start' });",
        target
    );

    await isVisibleInViewPort(target);
    await isNotObstructed(target);
}


export const isVisibleInViewPort = async (
    target: ElementFinder
): Promise<void> => {

    const isVisibleInViewPort = "var element = arguments[0]; " +
                                    "var rect = element.getBoundingClientRect(); " +
                                    "return ( " +
                                    "rect.top >= 0 && " +
                                    "rect.left >= 0 && " +
                                    "rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && " +
                                    "rect.right <= (window.innerWidth || document.documentElement.clientWidth) " +
                                    ");"

    await browser.executeScript(isVisibleInViewPort, target);
}


export const isNotObstructed = async (
    target: ElementFinder
): Promise<void> => {
    
    const isNotObstructed =    "var element = arguments[0]; " +
                                "var rect = element.getBoundingClientRect(); " +
                                "var cx = rect.left + rect.width / 2; " +
                                "var cy = rect.top + rect.height / 2; " +
                                "var el = document.elementFromPoint(cx, cy); " +
                                "var isNotObstructed = false; " +
                                "for(; el; el = el.parentElement) { " +
                                "   if (el === element) { " +
                                "      isNotObstructed = true; " +
                                "      break;" +
                                "   }" +
                                "}" +
                                "return isNotObstructed;"

    await browser.executeScript(isNotObstructed, target);
}





export const getElementFinder = (
    target: ElementFinder,
): ElementFinder => {
    if(target.hasOwnProperty('parentElementArrayFinder')) {
        return target as ElementFinder;
    }
    return element(target as Locator);
}