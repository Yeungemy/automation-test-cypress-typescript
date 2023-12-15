import { homePage } from "../../../pages/commonSection/homePage/home.page";
import * as EXERCISES from '../../../../data/exercises';
import { textBoxSection } from "../../../pages/commonSection/textBox/textBox.section";
import * as Chance from 'chance';
const chance = new Chance();

describe('Text Box', () => {
    const comments = chance.sentence();

    before(() => {
        homePage.navigateToExercisePage(EXERCISES.EXERCISES.HTML_FORM_EXAMPLE);
    });

    it('Should be able to enter text into a text box input field', () => {
        //fill user name
        textBoxSection.fillTextInputField(textBoxSection.selectors.USERNAME_INPUT_FIELD, Cypress.env('userName'));

        //fill password
        textBoxSection.fillTextInputField(textBoxSection.selectors.PASSWORD_INPUT_FIELD, Cypress.env('password'));

        //fill text area
        textBoxSection.fillTextInputField(textBoxSection.selectors.TEXTAREA_COMMENT_INPUT_FIELD, comments);
    });
});