import { HomePage } from "../page-objects/home.page";
import { browser } from "protractor";
import * as pageData from "../test-data/pageData.json";



describe('Home Page - Elements', () => {
    let page: HomePage;

    beforeAll(() => {
        page = new HomePage();
        browser.waitForAngularEnabled(false); //For non-angular page
        page.navigateToHomePage();
    });

    describe('Home Page - Elements', () => {
        it('Should have the correct page title', async () => {
            expect(await browser.getTitle()).toEqual(pageData.homePage.pageTitle);
        });

        it('Should display SalesChamp Header Navigation Logo', async () => {
            expect(await page.headerLogo().isDisplayed()).toBe(true);
        });

        it('Should display correct Hero Title', async () => {
            expect(await page.heroTitle().getText()).toBe(pageData.homePage.heroTitle);
        });

        it('Should display Navigation Items', async () => {
            expect(await page.headerLogo().isDisplayed()).toBe(true);
            expect(await page.careersLink().isDisplayed()).toBe(true);
            expect(await page.pricingLink().isDisplayed()).toBe(true);
            expect(await page.contactUsLink().isDisplayed()).toBe(true);
        });
    });
});