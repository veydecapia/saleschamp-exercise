import { CareersPage } from "../page-objects/careers.page";
import { HomePage } from "../page-objects/home.page";
import { browser } from "protractor";
import { getElementAttributeValue, scrollToElement, waitElementToBeClickable, waitToBeDisplayed } from "../shared/utils";
import * as roleData from '../test-data/roleData.json';



describe('See open positions in Sales Champ', () => {
   let homePage: HomePage;
   let careeersPage: CareersPage;
   careeersPage = new CareersPage();

   beforeAll(() => {
        //Go To Sales Champ Home Page
        homePage = new HomePage();
        browser.waitForAngularEnabled(false);
        homePage.navigateToHomePage();
   });

   xdescribe('Go to Careers Page', () => {
        beforeAll(async() => {
            //Navigate to Careers Page
            await careeersPage.careersLink().click();
        });
       
        it('Should have the correct page title', async () => {
            expect(await browser.getTitle()).toEqual('Careers');
        });

        it('Should have the correct URL', async () => {
            expect(await browser.getCurrentUrl()).toContain("careers");
        });

        it('Should be the current menu selected', async () => {
            expect(await getElementAttributeValue(careeersPage.careersLink(), 'class')).toContain('current');
        });

        it('Should display correct Hero Title', async () => {
            expect(await careeersPage.heroTitle().getText())
                        .toBe("You can make an impact on simplifying digital communication");
        });

        it('Should display correct Hero paragraph', async () => {
            expect((await careeersPage.heroParagraph().getText()).trim())
                    //TODO: Add as a json file.
                    .toBe("We're rapidly growing here at SalesChamp. We're hiring now and will continue to do so throughout 2021. We’re looking for passionate people to join our young, friendly team. ".trim());
        });

        it('Should display Apply Now Button', async () => {
            expect(await careeersPage.applyNowBtn().isDisplayed()).toBe(true);
        });

        it('Should display View Hot Roles Button', async () => {
            expect(await careeersPage.viewHotRolesBtn().isDisplayed()).toBe(true);
        });
   });


   describe('View Open Positions - Hot Roles', () => {

        beforeAll(async() => {
            //Navigate to Careers Page
            await careeersPage.careersLink().click();
        });
       
        it('Should view open positions', async () => {
            //Arrange

            //Act
            await careeersPage.viewHotRolesBtn().click();
            browser.sleep(1000); //TODO: Add wait for scroll
            waitElementToBeClickable(careeersPage.openPositionsSection());

            //Assert
            expect(await browser.getCurrentUrl()).toContain('#open-positions');
            expect(await careeersPage.openPositionsSection().isDisplayed()).toBe(true);
        });



        // DATA DRIVEN TESTS
        roleData.forEach((item , index) => {
            describe("Get details for the role: " + item.roleName, () => {
                it('Should display correct Role Name: ' + item.roleName, async () => {
                    //Act
                    const element = careeersPage.roleName(index);
                    await scrollToElement(element); //TODO: Add wait for scroll
                    browser.sleep(100);
        
                    //Assert
                    expect((await element.getText()).trim()).toBe(item.roleName.trim());
                });
                
                
                it('Should display correct Role Description'  + item.roleName, async () => {
                    expect((await careeersPage.roleDescription(index).getText()).trim())
                                  .toBe(item.roleDesc.trim());
                });
        
                
                it('Should display View Details plus sign button '  + item.roleName, async () => {
                    expect(await careeersPage.viewDetailsPlusSignButton(index).isDisplayed()).toBe(true);
                });
        
                
                it('Should display Apply Now button'  + item.roleName, async () => {
                    expect(await careeersPage.cardRoleApplyNowBtn(index).isDisplayed()).toBe(true);
                });
            });
        });



   });
});