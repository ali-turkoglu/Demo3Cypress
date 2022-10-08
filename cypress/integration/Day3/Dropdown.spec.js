
var data = require('../../fixtures/states.json')
describe('Dropdown Testing', () => {


    it('State Selection', () => {
        cy.visit('https://practice.cydeo.com/dropdown')

        cy.get('#state > option').each((element, index) => {

            const text = element.text()

            expect(text).to.contain(data.states[index])

            cy.get('#state').select(element.text()).should('be.visible')


        })

    })


//year selection will handle
    // it.only('date Selection', () => {

    //     cy.visit('https://practice.cydeo.com/dropdown')

    //     cy.get('#year > option').each((element, index) => {

    //         //expect('2010').to.contain('2010')
    //         cy.get('#year').select(element.....contain('2010')).should('be.visible')

    //     })

    // })



})