/// <reference types="cypress" />

describe('Web elements',()=>{

//tag name
cy.get('input')

//by ID
cy.get('#radio1')

//by class name
cy.get('.iCheck-helper')

//by attribute name
cy.get('[type]')

//by attribute name and value
cy.get('[type="radio"]')

//by class value
cy.get('[class="iCheck-helper"]')

//by tag name and attribute with value
cy.get('input [name="abuse"]').eq(0)
cy.get('input #radio1')

//by two different attributes or more (without coma between attributes)
cy.get('[name="abuse"][class="iCheck-helper"][type="radio"]')

//contains of text values
cy.contains('Blue').click()





})