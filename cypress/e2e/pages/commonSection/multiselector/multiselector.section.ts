class MultiselectSection{
    get selectors(): any{
        return{
            MULTISELECT_CONTAINER: 'select[multiple="multiple"]',
            MULTISELECT_ITEM: 'option'
        }
    }

    get strings(): any{
        return{
            OPTION_ONE: 'Selection Item 1',
            OPTION_TWO: 'Selection Item 2',
            OPTION_THREE: 'Selection Item 3'
        }
    }

    selectOptionsByListOfNames(elementSelector: string, ...listOfNames: string[]): void{
        cy.get(elementSelector).select(listOfNames);
    }
}
const multiselectSection = new MultiselectSection();
export {multiselectSection};