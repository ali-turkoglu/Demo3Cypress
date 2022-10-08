

describe('Login page smoke test',() =>{

    it('Positive Testing',() =>{
        cy.login_positive_scenarios()
    })

    it('Wrong password right username Negative TEsting',() =>{
        cy.Negative_Password_Testing()
    })

    it('Wrong username right password Negative Testing',() =>{
        cy.Negative_Username_Testing()
    })

    it('Wrong username wrong password Negative Testing',() =>{
        cy.Negative_Username_Password_Testing()
    })




})