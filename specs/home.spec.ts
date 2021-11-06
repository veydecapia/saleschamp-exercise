import { HomePage } from "../page-objects/home.page";
import { browser } from "protractor";



describe('Home Page - Elements', () => {
    let page: HomePage;

    beforeAll(() => {
        page = new HomePage();
        browser.waitForAngularEnabled(false); //For non-angular page
        page.navigateToHomePage();
    });

    describe('Home Page - Elements', () => {
        it('Should have the correct page title', async () => {
            expect(await browser.getTitle()).toEqual('SalesChamp - Communicate like a champion')
        });

        it('Should display SalesChamp Header Navigation Logo', async () => {
            expect(await page.headerLogo().isDisplayed()).toBe(true);
        });

    });
});