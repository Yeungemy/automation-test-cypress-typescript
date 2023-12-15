import { homePage } from "../../../pages/commonSection/homePage/home.page";
import * as EXERCISES from '../../../../data/exercises';
import { multiselectSection } from "../../../pages/commonSection/multiselector/multiselector.section";

describe('Multiselect', () => {
    before(() => {
        homePage.navigateToExercisePage(EXERCISES.EXERCISES.HTML_FORM_EXAMPLE);
    });

    it('Should multiselect a option from the the dropdown list', () => {
        multiselectSection.selectOptionsByListOfNames(multiselectSection.selectors.MULTISELECT_CONTAINER, multiselectSection.strings.OPTION_ONE, multiselectSection.strings.OPTION_TWO);
    });
});