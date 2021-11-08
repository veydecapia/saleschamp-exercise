import { CareersPage } from "../page-objects/careers.page";
import { HomePage } from "../page-objects/home.page";
import { browser } from "protractor";
import { getElementAttributeValue, isVisibleInViewPort, isNotObstructed, scrollToElement, waitElementToBeClickable } from "../shared/utils";
import { protractor } from "protractor/built/ptor";
import * as roleData from '../test-data/roleData.json';
import * as applyRoleData from '../test-data/applyRoleData.json';
import * as pageData from "../test-data/pageData.json";


describe('See open positions in Sales Champ and Apply', () => {
   let homePage: HomePage;
   let careeersPage: CareersPage;
   careeersPage = new CareersPage();

   beforeAll(() => {
        //Go To Sales Champ Home Page
        homePage = new HomePage();
        browser.waitForAngularEnabled(false);
        homePage.navigateToHomePage();
   });

   describe('Go to Careers Page', () => {
        beforeAll(async() => {
            //Setup
            await careeersPage.careersLink().click(); //Navigate to Careers Page
        });

        afterAll(async() => {
            //Teardown
            const EC = protractor.ExpectedConditions;
            await careeersPage.headerLogo().click();

            browser.wait(EC.titleIs(pageData.homePage.pageTitle));
        });
       
        it('Should have the correct page title', async () => {
            expect(await browser.getTitle()).toEqual(pageData.careersPage.pageTitle);
        });

        it('Should have the correct URL', async () => {
            expect(await browser.getCurrentUrl()).toContain("careers");
        });

        it('Should be the current menu selected', async () => {
            expect(await getElementAttributeValue(careeersPage.careersLink(), 'class')).toContain('current');
        });

        it('Should display correct Hero Title', async () => {
            expect(await careeersPage.heroTitle().getText())
                        .toBe(pageData.careersPage.heroTitle);
        });

        it('Should display correct Hero paragraph', async () => {
            expect((await careeersPage.heroParagraph().getText()).trim())
                    .toBe(pageData.careersPage.heroParagraph.trim());
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
            //Setup
            await careeersPage.careersLink().click(); //Navigate to Careers Page
        });

        afterAll(async() => {
            //Teardown
            const EC = protractor.ExpectedConditions;
            await careeersPage.headerLogo().click();

            browser.wait(EC.titleIs(pageData.homePage.pageTitle));
        });
       
        it('Should view open positions', async () => {
            //Arrange

            //Act
            await careeersPage.viewHotRolesBtn().click();
            await isVisibleInViewPort(careeersPage.openPositionsSection());

            //Assert
            expect(await browser.getCurrentUrl()).toContain('#open-positions');
            expect(await careeersPage.openPositionsSection().isDisplayed()).toBe(true);
        });



        // DATA DRIVEN TESTS
        roleData.forEach((item, index) => {
            describe("Get details for the role: " + item.roleName, () => {
                it('Should display correct Role Name: ' + item.roleName, async () => {
                    //Act
                    const element = careeersPage.roleNameLbl(index);
                    await scrollToElement(element);
        
                    //Assert
                    expect((await element.getText()).trim()).toBe(item.roleName.trim());
                });
                
                
                it('Should display correct Role Description: '  + item.roleName, async () => {
                    expect((await careeersPage.roleDescriptionLbl(index).getText()).trim())
                                  .toBe(item.roleDesc.trim());
                });
        
                
                it('Should display View Details plus sign button', async () => {
                    expect(await careeersPage.viewDetailsPlusSignBtn(index).isDisplayed()).toBe(true);
                });
        
                
                it('Should display Apply Now button', async () => {
                    expect(await careeersPage.cardRoleApplyNowBtn(index).isDisplayed()).toBe(true);
                });
            });
        });



   });


   describe('Apply for a Role', () => {
        //Retrieve applicant test data
        const roleName = applyRoleData[0].applicantRole.trim(); //The role the applicant is interested in
        let index = 0; //Card index role in the front end, default = 0

        beforeAll( async () => {
            //Setup
            await careeersPage.careersLink().click(); //Navigate to Careers Page

            //Get index card role equal to the role name.
            index = await careeersPage.getIndexForARole(roleName);
            console.log("Card index for the role is : " + index);
        });

        afterAll( async () => {
            //Teardown
            const EC = protractor.ExpectedConditions;
            await careeersPage.headerLogo().click();

            browser.wait(EC.titleIs(pageData.homePage.pageTitle));
        });

        it('Should display correct Role Name: ' + roleName, async () => {
            //Act
            const element = careeersPage.roleNameLbl(index);
            await scrollToElement(element);

            //Assert
            expect((await element.getText()).trim()).toBe(roleName.trim());
        });
        
        
        it('Should display correct Role Description: '  + roleName, async () => {
            expect((await careeersPage.roleDescriptionLbl(index).getText()).trim())
                          .toBe(roleData[index].roleDesc.trim());
        });

        //TODO: Add it block verification to display correct details of the role
        
        it('Should hover to Careers form', async () => {
            //Act
            await careeersPage.cardRoleApplyNowBtn(index).click();
            await isVisibleInViewPort(careeersPage.careersFormSection());

            //Assert
            expect(await careeersPage.careersFormSection().isDisplayed()).toBe(true);
            expect(await careeersPage.applyForARoleLbl().isDisplayed()).toBe(true);
            expect(await careeersPage.fillOutInstructionsLbl().isDisplayed()).toBe(true);
        });


         /**
         * As captcha cannot be automated.
         * Need to request for developer to remove captcha functionality on a testing environment.
         * When dealing with a Production environment, Captcha can temporarily be disabled.
         */
        it('Should be able to Submit application', async () => {
            //Act
            await careeersPage.applyForARoleAction(applyRoleData);
            
            //Assert
            // expect(await careeersPage.formDoneBlock().getText())
            //         .toBe("Thank you! Your submission has been received!")

            //Assert on alert text box instead
            let alertBox = await browser.switchTo().alert();
            expect(await alertBox.getText()).toBe("Please confirm you’re not a robot.");

            //Teardown
            await alertBox.accept(); //Click Ok
        });



   });
});