import { homePage } from "../../../pages/commonSection/homePage/home.page";
import * as EXERCISES from '../../../../data/exercises';
import { modalDialog } from "../../../pages/commonSection/modalDialog/modal.dialog";

describe('Modal Dialog', () => {
    beforeEach(() => {
        //naviagat toe modal btn page
        homePage.navigateToExercisePage(EXERCISES.EXERCISES.FAKE_ALERT_PAGE);
    });

    it('Should see a fake dialog', () => {
        //click the btn
        cy.clickButton(modalDialog.selectors.FAKE_ALERT_BTN);

        //verify the message is on the dialog
        cy.get(modalDialog.selectors.DIALOG_TEXT).should('be.visible').invoke('text').should('contain', modalDialog.strings.DIALOG_TEXT_CONTENT);

        //close the dialog
        cy.clickButton(modalDialog.selectors.DIALOG_OK_BTN);
    });

    it('Should see a modal dialog', () => {
        //click the btn
        cy.clickButton(modalDialog.selectors.MODAL_DIALOG_BTN);

        //verify the message is on the dialog
        cy.get(modalDialog.selectors.DIALOG_TEXT).should('be.visible').invoke('text').should('contain',modalDialog.strings.MODAL_DIALOG_TEXT);

        //close the dialog
        cy.clickButton(modalDialog.selectors.DIALOG_OK_BTN);
    });
});