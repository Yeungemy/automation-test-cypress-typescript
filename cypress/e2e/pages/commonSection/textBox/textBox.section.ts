class TextBoxSection{
    get selectors(): any{
        return{
            USERNAME_INPUT_FIELD: '[name="username"]',
            PASSWORD_INPUT_FIELD: '[name="password"]',
            TEXTAREA_COMMENT_INPUT_FIELD: '[name="comments"]'
        }
    }

    fillTextInputField(elementSelector: string, textContent: string){
        cy.get(elementSelector).click().type('{selectall}').clear().type(textContent);

        //verify text content has been typed in
        cy.get(elementSelector).should('contain.value', textContent);
    }
}
const textBoxSection = new TextBoxSection();
export {textBoxSection};