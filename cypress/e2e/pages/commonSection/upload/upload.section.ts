class UploadSection{
    get selectors (): any{
        return {
           FILE_INPUT: '#fileinput',
           GENERAL_FILE_RADIO_BTN: '#itsafile',
           UPLOAD_BTN: '[value="Upload"]',
           FILE_UPLOADED: '#uploadedfilename'
        };
    }

    /**
     * Upload a file by name
     * @param {string} elementSelector - the element selector of the file input field 
     * @param {string} fileName - the name of the file
     */
    uploadFile(elementSelector: string, fileName: string): void{
        cy.get(elementSelector).attachFile(fileName);
    }
}
const uploadSection = new UploadSection();
export {uploadSection};