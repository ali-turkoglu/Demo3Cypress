describe('JavaScript Alerts Testing', () => {


    it('Handling JS Alert - Validate Alert text and Click OK', () => {

        cy.visit('https://practice.cydeo.com/javascript_alerts')

        cy.get('[onclick="jsAlert()"]').click()

        //cy.on -> use this if there are more than one option to click, otherwise we do not need to use cy.on if there is only OK button
        cy.on('windows:alert', (str) => {
            expect(str).to.equal('I am a JS Alert')
        })
        cy.on('window:confirm', () => true)

        cy.get('#result').should('have.text', 'You successfully clicked an alert')


    })


    it('Handling JS Confirm - Click OK', () => {

        cy.visit('https://practice.cydeo.com/javascript_alerts')

        cy.get('[onclick="jsConfirm()"]').click()

        //to confirm message of popup menu
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('I am a JS Confirm')
        })

        //to click OK button on popup menu
        cy.on('window:confirm', () => true)

        //assertion after closing popup menu 
        cy.get('#result').should('have.text', 'You clicked: Ok')

    })

    it('Handling JS Confirm - Click Cancel', () => {

        cy.visit('https://practice.cydeo.com/javascript_alerts')

        cy.get('[onclick="jsConfirm()"]').click()

        //to confirm message of popup menu
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('I am a JS Confirm')
        })

        //to click Cancel button on popup menu
        cy.on('window:confirm', () => false)

        //assertion after closing popup menu 
        cy.get('#result').should('have.text', 'You clicked: Cancel')

    })

    it('Handling JS Prompt - Input text in prompt, click OK and validate the input text', () => {

        cy.visit('https://practice.cydeo.com/javascript_alerts')

        cy.window().then(($win) => {
            cy.stub($win, 'prompt').returns('This is a test text')
            cy.get('[onclick="jsPrompt()"]').click()
        })

        cy.get('#result').should('have.text', 'You entered: This is a test text')

    })

})