

describe('Drag and Drop Testing', () => {


    it('drag and drop using data transfer', () => {

        cy.visit('https://practice.cydeo.com/drag_and_drop')

        drag_and_drop()



    })


})

const datatransfer = new DataTransfer;

function drag_and_drop() {

    cy.get('#column-a').should('be.visible').trigger('drag')
    cy.wait(500)
    cy.get('#column-b').should('be.visible').trigger('drop', {datatransfer})
    cy.wait(500)
    cy.get('#column-b').should('be.visible').trigger('dragend')

}