class CheckboxSection{
    get selectors(): any{
        return{
            CHECKBOX: 'input[type="checkbox"]',
            CHECKED_CHECKBOX: 'input[checked="checked"]'
        };
    };

    get strings(): any{
        return{
            CHECKBOX_ONE_VALUE: 'cb1',
            CHECKBOX_TWO_VALUE: 'cb2',
            CHECKBOX_THREE_VALUE: 'cb3'
        };
    };

    /**
     * Uncheck all checkboxes
     * @param {string} elementSelector - the element selector of the checkbox group
     */
    uncheckAll(elementSelector: string): void{
        cy.get(elementSelector).uncheck();

        //validate
        cy.get(elementSelector).each($el => {
            cy.wrap($el).should('not.be.checked');
        });
    }

    /**
     * Uncheck all checkboxes
     * @param {string} elementSelector - the element selector of the checkbox group
     */
    checkAll(elementSelector: string): void{
        cy.get(elementSelector).check();

        //validate
        cy.get(elementSelector).each($el => {
            cy.wrap($el).should('be.checked');
        });
    }

    /**
     * Uncheck checkboxes/radios with values
     * @param {string} elementSelector - the element selector of the checkbox group
     * @param {string[]} valuesOfCheckbox - the value list of checkboxes to be unchecked
     */
    uncheckByValues(elementSelector: string, ...valuesOfCheckbox: string[]): void{
        cy.get(elementSelector).uncheck(valuesOfCheckbox);

        //validate
        valuesOfCheckbox.forEach(valueOfCheckbox => {
            cy.get(elementSelector).filter(`[value="${valueOfCheckbox}"]`).should('not.be.checked');
        });
    }

    /**
     * Check checkboxes/radios with values
     * @param {string} elementSelector - the element selector of the checkbox group
     * @param {string[]} valuesOfCheckbox - the value list of checkboxes to be unchecked
     */
    checkByValues(elementSelector: string, ...valuesOfCheckbox: string[]): void{
        this.uncheckAll(elementSelector);
        cy.get(elementSelector).check(valuesOfCheckbox);

        //validate
        valuesOfCheckbox.forEach(valueOfCheckbox => {
            cy.get(elementSelector).filter(`[value="${valueOfCheckbox}"]`).should('be.checked');
        });
    }
}
const checkboxSection = new CheckboxSection();
export {checkboxSection};