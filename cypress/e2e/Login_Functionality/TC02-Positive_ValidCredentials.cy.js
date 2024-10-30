describe('Verifying Login', ()=>{
       
it('TC02 - Valid Credentials', function(){

    cy.visit("https://petstore.octoperf.com/actions/Catalog.action");

    cy.get('[id="MenuContent"]').click();

    cy.get('[name="username"]').type('Ragav');

    cy.get('[name="password"]').clear();

    cy.get('[name="password"]').type('ragav');

    cy.get('[name="signon"]').click();

    cy.get('#WelcomeContent').should('be.visible');
   
})

})
