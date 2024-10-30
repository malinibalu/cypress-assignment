describe('Verifying Login', ()=>{
       
    it('TC03 - Invalid username and Valid password', function(){
    
        cy.visit("https://petstore.octoperf.com/actions/Catalog.action");
    
        cy.get('[id="MenuContent"]').click();
    
        cy.get('[name="username"]').type('Raghavan');
    
        cy.get('[name="password"]').clear();
    
        cy.get('[name="password"]').type('ragav');
    
        cy.get('[name="signon"]').click();
   
        cy.contains('Invalid username or password. Signon failed.').should('be.visible') 
             
    })
    
    })