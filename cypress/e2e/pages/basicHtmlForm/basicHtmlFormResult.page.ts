class BasicHtmlFormResult{
    get selectors(): any{
        return {
            POST_FORM_SUBMIT_MSG_FIELD: '.explanation P',
            BACK_TO_FORM_BTN: '#back_to_form'
        };
    };

    get strings(): any{
        return {
            POST_FORM_SUBMIT_MSG: 'You submitted a form. The details below show the values you entered for processing.'
        };
    };

}
const basicHtmlFormResult = new BasicHtmlFormResult();
export {basicHtmlFormResult};