import { homePage } from "../../../pages/commonSection/homePage/home.page";
import * as EXERCISES from '../../../../data/exercises';
import { frameSection } from "../../../pages/commonSection/frame/frame.section";

describe('iFrame Test', {defaultCommandTimeout: 30000}, () => {
    beforeEach(() => {
        //navigate to iframe test page
        homePage.navigateToExercisePage(EXERCISES.EXERCISES.IFRAME_TEST_PAGE);
    });

    it('Should be able to interact with the nested iframe section on the page', () => {
        //verify nested normal context is shown as expected
        cy.get(frameSection.selectors.PAGE_BODY).find(frameSection.selectors.IFRAME_EXPLANATION).should('be.visible').and('contain.text', frameSection.strings.IFRAME_NESTED_EXPLANATION_MSG);
        
        //load iframe
        cy.frameLoaded(frameSection.selectors.IFRAME_HEADER);

        //verify the content is in iframe section as expected
        cy.iframe(frameSection.selectors.IFRAME_HEADER).find(frameSection.selectors.IFRAME_EXPLANATION).should('be.visible').and('contain.text', frameSection.strings.PAGE_IFRAME_EXPLANATION_MSG);
        
        //navigate to home page by click the INDEX linkage
        cy.clickButton(frameSection.selectors.PAGE_NAVIGATION_LINK);

        //verify now it is on the home page
        cy.url().should('eq', Cypress.env('url'));
    });
});