
<reference types="cypress" />

// visit
cy.visit('open url');
cy.visit('url',{timeout:10000});

//should is promise
cy.url().should('include','case sensitive given string to assert');

//finding the element
cy.get(loc).click();
cy.get(loc).should('be.visible');
cy.get(loc).should('be.exist');


//negative ones
cy.get(loc).should('not.be.visible');
cy.get(loc).should('not.be.exist');


cy.get('h1').should('have.length',3);
cy.get('h1').should('have.text','blablabla');
cy.get('h1').should('have.value','cypress');


//parent to the child
cy.get(loc).first();
cy.get(loc).last();
cy.get(loc).eq(1).click();


cy.get(loc).next().click()
//if you do not use the multiple true it will throw an exception
cy.go('back');
cy.get('tbody tr').nextAll.click({multible:true});//10 element --> go by one by and click with click's parantesis {multible:true}


cy.get(loc).prev.click();
cy.get(loc).prevAll.click({multible:true});


//position handling
//https://the-internet.herokuapp.com/login
cy.get(loc).click('top')
cy.get(loc).click('buttom')
cy.get(loc).click('topLeft')


//hover handling
cy.get(loc).trigger('mouseover').click()
cy.get(loc).trigger('mouseup').click()


//clear and type
cy.get('#username').clear().type('username')












