import { homePage } from "../../../pages/commonSection/homePage/home.page";
import * as EXERCISES from '../../../../data/exercises';
import { uploadSection } from "../../../pages/commonSection/upload/upload.section";

describe('File Upload', () => {
    const fileName = 'example.json';

    before(() => {
        homePage.navigateToExercisePage(EXERCISES.EXERCISES.UPLOAD_TEST_PAGE);
    });

    it('Should be able to upload a file', () => {
        //attach file from the fixture
        cy.get(uploadSection.selectors.FILE_INPUT).attachFile(fileName);

        //select file type
        cy.checkRadioOrCheckbox(uploadSection.selectors.GENERAL_FILE_RADIO_BTN);

        //click the upload button
        cy.clickButton(uploadSection.selectors.UPLOAD_BTN);

        //verify the file has been uploaded
        cy.get(uploadSection.selectors.FILE_UPLOADED).should('contain.text', fileName);
    });
});