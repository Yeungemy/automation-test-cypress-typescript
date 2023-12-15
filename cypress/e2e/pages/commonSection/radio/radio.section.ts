class RadioSection{
    get selectors(): any{
        return{
            RADIO_BTN: '[type="radio"]'
        };
    };

    get strings(): any{
        return{
            RADIO_ONE: 'rd1',
            RADIO_TWO: 'rd2',
            RADIO_THREE: 'rd3'
        };
    };

    /**
     * Check radios with the value passed
     * @param {string} elementSelector - the element selector of the checkbox group
     * @param {string} valueOfRadio - the value list of checkboxes to be unchecked
     */
    checRadiokByValue(elementSelector: string, valueOfRadio: string): void{
        cy.get(elementSelector).check(valueOfRadio);

        //validate 
        //should the radio with above value has been checked
        cy.get(elementSelector).filter(`[value="${valueOfRadio}"]`).should('be.checked');

        //should other radios without that value have not been checked
        cy.get(elementSelector).not(`[value="${valueOfRadio}"]`).each($radio => {
            cy.wrap($radio).should('not.be.checked');
        });
    }
}
const radioSection = new RadioSection();
export {radioSection}