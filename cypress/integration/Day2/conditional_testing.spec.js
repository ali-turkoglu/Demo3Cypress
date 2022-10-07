

describe('Conditional Testing',() =>{

    it('Test wikovoyage exist using length',() =>{

        cy.visit('/')

        cy.get('body').then((body) => {

            if(body.find('[class="other-project-title jsl10n"]').length > 0){ //it means if element is exist
                cy.get('[data-jsl10n="wikivoyage.slogan"]').click()
                cy.url().should('eq','https://www.wikivoyage.org/')
            }else{
                cy.get('[class="other-project-title jsl10n]').click()
                cy.url().should('eq','https://commons.wikimedia.org/wiki/Main_Page')
            }
        })


    })


})