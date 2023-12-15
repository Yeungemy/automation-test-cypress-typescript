import { homePage } from "../../../pages/commonSection/homePage/home.page";
import * as EXERCISES from '../../../../data/exercises';
import { frameSection } from "../../../pages/commonSection/frame/frame.section";

describe('Frame Test', {defaultCommandTimeout: 30000}, () => {
    beforeEach(() => {
        //navigate to iframe test page
        homePage.navigateToExercisePage(EXERCISES.EXERCISES.FRAME_TEST_PAGE);
    });

    it('Should be able to interact with the header iframe section on the page', () => {
        //verify three frames are shown
        cy.get(frameSection.selectors.LEFT_FRAME).should('be.visible');
        cy.get(frameSection.selectors.MIDDLE_FRAME).should('be.visible');
        cy.get(frameSection.selectors.RIGHT_FRAME).should('be.visible');
        cy.get(frameSection.selectors.TOP_FRAME).should('be.visible');
    });

    it('Should be able to interact with the header iframe section on the page', () => {
        //load top frame
        cy.frameLoaded(frameSection.selectors.TOP_FRAME);

        //click the home navigation link
        cy.iframe(frameSection.selectors.TOP_FRAME).find(frameSection.selectors.PAGE_NAVIGATION_LINK).should('be.visible');
    });
});