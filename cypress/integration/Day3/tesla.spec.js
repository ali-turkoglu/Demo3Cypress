import{teslaURL} from '../../support/authentication.constant'
import{onModelSPage} from '../../support/models'


describe('Tesla.com automation testing',()=>{

    beforeEach('Navigate to page to tesla.com',()=>{
        cy.visit(teslaURL)
    })

    it('Model S Testing',()=>{

        onModelSPage.urlVerification();
        onModelSPage.privacy_Verification();
        onModelSPage.modelScomparePage();

    })

    it('Test',()=>{

    })


})