import { homePage } from "../../../pages/commonSection/homePage/home.page";
import * as EXERCISES from '../../../../data/exercises';
import * as Chance from 'chance';
const chance = new Chance();

describe('Form Submitting', () => {
    before(() => {
        homePage.navigateToExercisePage(EXERCISES.EXERCISES.HTML_FORM_EXAMPLE);
    });

    it('Should be able to submit a form ', () => {
        /**
         * TODO: ISSUE - CANCEL BUTTON DOESN'T WORK, AND
         * USER CAN SUBMIT A EMPLTY FORM DUE TO MISSING VALIDATION
         */
        
    });
});