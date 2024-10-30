describe('Verifying Login', ()=>{
       
    it('TC04 - Without Input for Username and Password', function(){
    
        cy.visit("https://petstore.octoperf.com/actions/Catalog.action");
    
        cy.get('[id="MenuContent"]').click();
    
        cy.get('[name="username"]').type(' ');
    
        cy.get('[name="password"]').clear();
    
        cy.get('[name="password"]').type(' ');
    
        cy.get('[name="signon"]').click();
   
        cy.contains('Please enter your username and password.').should('be.visible') 
             
    })
    
    })