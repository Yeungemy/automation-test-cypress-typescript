import { homePage } from "../../../pages/commonSection/homePage/home.page";
import * as EXERCISES from '../../../../data/exercises';
import { radioSection } from "../../../pages/commonSection/radio/radio.section";

describe('Radios', () => {
    before(() => {
        homePage.navigateToExercisePage(EXERCISES.EXERCISES.HTML_FORM_EXAMPLE);
    });

    it('Should check a option from the group of radios', () => {
        radioSection.checRadiokByValue(radioSection.selectors.RADIO_BTN ,radioSection.strings.RADIO_ONE);
    });
});