class ModalDialog{
    get selectors(): any {
        return {
            FAKE_ALERT_BTN: '#fakealert',
            MODAL_DIALOG_BTN: '#modaldialog',
            DIALOG_TEXT: '#dialog-text',
            DIALOG_OK_BTN: '#dialog-ok'
        };
    }

    get strings(): any {
        return {
            DIALOG_TEXT_CONTENT: 'I am a fake alert box!',
            MODAL_DIALOG_TEXT: 'I am a modal div!'
        };
    }
}
const modalDialog = new ModalDialog();
export {modalDialog};