class DropdownSection{
    get selectors(): any{
        return{
            SELECT_INPUT_FIELD: 'select[name="dropdown"]'
        };
    };

    get strings(): any{
        return {
            DROPDOWN_ITEM_SIX: 'Drop Down Item 6'
        }
    }

    /**
     * Select an option from the dropdown
     * @param {string} elementSelector - the element selector of the input field
     * @param {string} optionName - the name of an option to be selected
     */
    selectOptionFromDropdown(elementSelector: string, optionName: string): void{
       cy.get(elementSelector).select(optionName); 
       
       //validate
       cy.get(elementSelector).should('contain.text', optionName);
    }
}
const dropdownSection = new DropdownSection();
export {dropdownSection};