import { homePage } from "../../../pages/commonSection/homePage/home.page";
import * as EXERCISES from '../../../../data/exercises';
import { alertSection } from "../../../pages/commonSection/Alert/Alert.section";

describe.only('Alert', () => {
    beforeEach(() => {
        homePage.navigateToExercisePage(EXERCISES.EXERCISES.JS_ALERT_PAGE);
    });

    it('Should be see an alert', () => {
        //click the alert button
        cy.clickButton(alertSection.selectors.JS_ALERT_BTN);

        //verify the alert message has been shown
        cy.on('window:alert', (str) => {
            expect(str).to.equal(alertSection.strings.JS_ALERT_MSG)
        });
    });

    it('Should be see a confirm alert', () => {
        //click the alert button
        cy.clickButton(alertSection.selectors.JS_CONFIM_ALERT_BTN);

        //verify the alert message has been shown
        cy.on('window:confirm', (str) => {
            expect(str).to.equal(alertSection.strings.JS_CONFIM_ALERT_MSG);
        });
    });
});