class BasicHtmlForm {
    get selectors(): any {
        return {
            SUBMIT_BTN: '[value="submit"]',
            FILE_INPUT_FIELD: '[name="filename"]'
        };
    };
}
const basicHtmlForm = new BasicHtmlForm();
export { basicHtmlForm };