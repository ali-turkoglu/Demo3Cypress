

describe('File Upload',() =>{

    it('png file upload',() => {

            cy.visit('https://practice.cydeo.com/upload')

            cy.get('#file-upload').attachFile('images.jpeg')

            cy.get('[class="button"]').click()

            cy.get('#uploaded-files').invoke('text','images.jpeg').should('be.visible')


    })



})