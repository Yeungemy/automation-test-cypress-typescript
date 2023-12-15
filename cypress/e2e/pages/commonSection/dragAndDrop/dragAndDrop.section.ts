class DragAndDropSection {
    get selectors(): any {
        return {
            DRAGGABLE_ITEM: '#draggable1',
            DROPPABLE_PLACE: '#droppable1'
        }
    }

    get strings(): any {
        return {
            DROPPED_STATE: 'Dropped'
        }
    }

    dragAndDrop(draggableItem: string, drappablePlace: string): void {
        cy.dragAndDrop(draggableItem, drappablePlace);
    }
}
const dragAndDropSection = new DragAndDropSection();
export { dragAndDropSection };