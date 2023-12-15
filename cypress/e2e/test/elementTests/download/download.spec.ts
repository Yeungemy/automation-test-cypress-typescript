import { homePage } from "../../../pages/commonSection/homePage/home.page";
import * as EXERCISES from '../../../../data/exercises';
import { downloadSection } from "../../../pages/commonSection/download/download.section";

describe('Download', {defaultCommandTimeout: 30000}, () => {
    const fileName = 'textfile.txt';
    const downloadsFolder = Cypress.config("downloadsFolder")
    const downloadPath = `${downloadsFolder}/${fileName}`

    before(() => {
        homePage.navigateToExercisePage(EXERCISES.EXERCISES.DOWNLOAD_TEST_PAGE);
    });

    it('Should be able to download a file', () => {
        //click the file download link
        cy.clickButton(downloadSection.selectors.DIRECTED_DOWNLOAD_BTN);

        cy.fixture(fileName).then(fileContent => {
            cy.readFile(downloadPath).then(downloadedFileContent => { 
              expect(downloadedFileContent.replace(/\n/g, '')).equals(fileContent.replace(/\r\n/g, ''))   
              
              //deep
              expect(downloadedFileContent.replace(/\n/g, '')).to.deep.eq(fileContent.replace(/\r\n/g, ''))   
            })
          })
    });
});