import * as Chance from 'chance';
const chance = new Chance();
import { homePage } from "../../../pages/commonSection/homePage/home.page";
import * as EXERCISES from '../../../../data/exercises';
import { textBoxSection } from '../../../pages/commonSection/textBox/textBox.section';
import { uploadSection } from '../../../pages/commonSection/upload/upload.section';
import { basicHtmlForm } from '../../../pages/basicHtmlForm/basicHtmlForm.page';
import { basicHtmlFormResult } from '../../../pages/basicHtmlForm/basicHtmlFormResult.page';

describe('Form Submit', () => {
    const comments = chance.sentence();
    const fileName = 'example.json';

    beforeEach(() => {
        homePage.navigateToExercisePage(EXERCISES.EXERCISES.HTML_FORM_EXAMPLE);
    });

    it('Should check a option from the group of checkboxes', () => {
        //fill user name
        textBoxSection.fillTextInputField(textBoxSection.selectors.USERNAME_INPUT_FIELD, Cypress.env('userName'));

        //fill password
        textBoxSection.fillTextInputField(textBoxSection.selectors.PASSWORD_INPUT_FIELD, Cypress.env('password'));

        //fill text area
        textBoxSection.fillTextInputField(textBoxSection.selectors.TEXTAREA_COMMENT_INPUT_FIELD, comments);

        //attach file
        uploadSection.uploadFile(basicHtmlForm.selectors.FILE_INPUT_FIELD, fileName);

        //click the submit button
        cy.clickButton(basicHtmlForm.selectors.SUBMIT_BTN);

        //verify the form has been submitted
        cy.get(basicHtmlFormResult.selectors.POST_FORM_SUBMIT_MSG_FIELD).should('contain.text', basicHtmlFormResult.strings.POST_FORM_SUBMIT_MSG);

        //click to the back to form button
        // cy.clickButton(basicHtmlFormResult.selectors.BACK_TO_FORM_BTN);
        cy.go('back');

        //verify user has been back to the form page
        cy.get(basicHtmlForm.selectors.SUBMIT_BTN).should('be.visible');
    });
});