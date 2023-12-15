import { homePage } from "../../../pages/commonSection/homePage/home.page";
import * as EXERCISES from '../../../../data/exercises';
import { dropdownSection } from "../../../pages/commonSection/checkbox/dropdown/dropdown.section";

describe('Dropdown', () => {
    before(() => {
        homePage.navigateToExercisePage(EXERCISES.EXERCISES.HTML_FORM_EXAMPLE);
    });

    it('Should be able to select an option from the dropdown list', () => {
        dropdownSection.selectOptionFromDropdown(dropdownSection.selectors.SELECT_INPUT_FIELD, dropdownSection.strings.DROPDOWN_ITEM_SIX);
    });
});