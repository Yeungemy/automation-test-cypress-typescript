class HomePage {
    get selectors(): any {
        return {
            
        };
    }

    navigateToExercisePage(exerciseName: string): void{
        cy.navigateTo(Cypress.env('url'));
        cy.contains('a', exerciseName).click().should('not.exist')
    }
}
const homePage = new HomePage();
export {homePage};