class AlertSection{
    get selectors(): any{
        return{
            JS_ALERT_BTN: '#alertexamples',
            JS_CONFIM_ALERT_BTN: '#confirmexample'
        };
    }

    get strings(): any{
        return {
            JS_ALERT_MSG: 'I am an alert box!',
            JS_CONFIM_ALERT_MSG: 'I am a confirm alert'
        };
    }

    /**
     * Click the alert button by element selector of the alert btn
     * @param {string} elementSelector - element selector of the alert btn
     */
    clickButton(elementSelector: string): void{
        cy.get(elementSelector).click();
    }
}
const alertSection = new AlertSection();
export {alertSection};