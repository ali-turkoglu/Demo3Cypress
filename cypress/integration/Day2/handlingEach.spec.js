//import { each } from "cypress/types/bluebird"
//import { keys } from "cypress/types/lodash"

var data = require('../../fixtures/staging.json')

describe('Handling each function', () => {

    before(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('[name="username"]').clear().type('Admin')

        cy.get('[type="password"]').clear().type('admin123')
        cy.get('[type="submit"]').click()
    })

    it('Testing each test', () => {

        cy.wait(4000)
        //                    each -> like forEach loop        
        cy.get('.quickLinkText').each(($el, index) => { // $el represent element, it can be any word

        cy.log('element: ', $el.text())    

        const text =$el.text()

        expect(text).to.contain(data.quickLaunch[index])

        })



    })





})