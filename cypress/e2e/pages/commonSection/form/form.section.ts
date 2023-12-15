class FormSection{
    get selectors(): any{
        return {
            DATA_PICKER_FIELD: '#date-picker',
            DATA_TIME_PICKER: '#date-time-picker',
            COLOR_PICKER: '#colour-picker',
            EMAIL_FIELD: '#email-field',
            MONTH_FIELD: '#month-field',
            NUMBER_FIELD: '#number-field',
            RESET_BTN: '[type="reset"]',
            SUBMIT_BTN: '[type="submit"]',
        };
    }
}
const formSection = new FormSection(); 
export {formSection};