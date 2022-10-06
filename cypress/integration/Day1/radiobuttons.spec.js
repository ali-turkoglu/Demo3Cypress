/// <reference types="cypress" />

import { URL } from '../../support/authentication'
describe('radio button test', () => {

    it('Verify all the radio buttons are checked', () => {

        cy.visit(URL)

        cy.get('[type="radio"]').then(radioButtons => {
            cy.wrap(radioButtons).first()
                .check()
                .should('be.checked')

            for (var i = 0; i <= radioButtons.length - 1; i++) {
                cy.wrap(radioButtons).eq(i)
                    .check({ force: true })
                    .should('be.visible')
                cy.wait(500)
            }
        })


    })




})