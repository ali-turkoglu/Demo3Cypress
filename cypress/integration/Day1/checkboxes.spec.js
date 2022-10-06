/// <reference types="cypress" />

describe('Checkboxes testing',() => {


it('checkbox testing',() => {

    cy.visit('http://practice.cybertekschool.com/checkboxes')

    cy.get('#box1').check().should('be.checked')

    
    //cy.viewport('iphone-8')
    cy.wait(1000)
    
    cy.get('#box2').uncheck().should('not.be.checked')



})




















})