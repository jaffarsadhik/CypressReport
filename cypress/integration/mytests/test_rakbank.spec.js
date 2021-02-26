describe('Rakbank', function(){

    it('ContactTest', function(){
        cy.visit('https://rakbank.stage.verloop.io/livechat?mode=popout&recipe_id=RKpCe4tZjQ4iL2H6y')
        cy.contains('your digital assistant',{timeout:10000}).should('be.visible')
        cy.get('.input-message').type('Contact Protego')
        cy.get('.send-button').should('be.visible').click()
        cy.contains('Thank you for your interest.',{timeout:10000}).should('be.visible')
        


    })
})