import { homePage } from "../../../pages/commonSection/homePage/home.page";
import * as EXERCISES from '../../../../data/exercises';
import { dragAndDropSection } from "../../../pages/commonSection/dragAndDrop/dragAndDrop.section";

describe('Drag and Drop', () => {

    before(() => {
        homePage.navigateToExercisePage(EXERCISES.EXERCISES.DRAG_AND_DROP_PAGE);
    });

    it('should be able to drag and drop an item to the expected place', () => {
        cy.get(dragAndDropSection.selectors.DROPPABLE_PLACE).invoke('text').then(originalState => {
            //drag item to another place
            dragAndDropSection.dragAndDrop(dragAndDropSection.selectors.DRAGGABLE_ITEM, dragAndDropSection.selectors.DROPPABLE_PLACE);

            //very the item has been relocated
            cy.get(dragAndDropSection.selectors.DROPPABLE_PLACE).invoke('text').then(currentState => {
                expect(currentState).not.eq(originalState);
                expect(currentState).to.contain(dragAndDropSection.strings.DROPPED_STATE);
            });
        });
    });
});