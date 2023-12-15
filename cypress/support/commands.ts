// commands.ts
import 'cypress-file-upload';
require('cypress-downloadfile/lib/downloadFileCommand');
import 'cypress-iframe';
import '@4tw/cypress-drag-drop';

declare global {
    namespace Cypress {
        interface Chainable {
            navigateTo(url?: string): void;
            clickButton(elementSelector: string): void;
            checkRadioOrCheckbox(elementSelector: string): void;
            dragAndDrop(draggableItem: string, droppablePlace: string): void;
        }
    }
}

Cypress.Commands.add('navigateTo', (url: string = '/') => {
    cy.visit(url);
});

Cypress.Commands.add('clickButton', (elementSelector: string) => {
    cy.get(elementSelector).should('be.visible').click();
});

Cypress.Commands.add('checkRadioOrCheckbox', (elementSelector: string) => {
    cy.get(elementSelector).check();
});

// Define the dragAndDrop command
Cypress.Commands.add('dragAndDrop', (draggableItem: string, droppablePlace: string) => {
    // Use the drag-and-drop command provided by the @4tw/cypress-drag-drop library
    cy.get(draggableItem).drag(droppablePlace);
});