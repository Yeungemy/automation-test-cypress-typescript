import { homePage } from "../../../pages/commonSection/homePage/home.page";
import * as EXERCISES from '../../../../data/exercises';
import { checkboxSection } from "../../../pages/commonSection/checkbox/checkbox.section";

describe('Checkbox', () => {
    beforeEach(() => {
        homePage.navigateToExercisePage(EXERCISES.EXERCISES.HTML_FORM_EXAMPLE);
    });

    it('Should check a option from the group of checkboxes', () => {
        checkboxSection.checkByValues(checkboxSection.selectors.CHECKBOX, checkboxSection.strings.CHECKBOX_ONE_VALUE);
    });

    it('should be able to check all checkboxes', () => {
        //check all checkboxes
        checkboxSection.checkAll(checkboxSection.selectors.CHECKBOX);
        // checkboxSection.checkByValues(checkboxSection.selectors.CHECKBOX, checkboxSection.strings.CHECKBOX_ONE_VALUE, checkboxSection.strings.CHECKBOX_TWO_VALUE, checkboxSection.strings.CHECKBOX_THREE_VALUE);

        //uncheck all checkboxes
        checkboxSection.uncheckAll(checkboxSection.selectors.CHECKBOX);
        // checkboxSection.uncheckByValues(checkboxSection.selectors.CHECKBOX, checkboxSection.strings.CHECKBOX_ONE_VALUE, checkboxSection.strings.CHECKBOX_TWO_VALUE, checkboxSection.strings.CHECKBOX_THREE_VALUE);
    });
});