describe('Lido', function(){

    it('tutorflowtest', function(){
        cy.visit('https://lidotutorsupport.verloop.io/livechat?mode=popout&recipe_id=LvEBP257Cr4P5uNE7')
        cy.contains('registered email',{timeout:10000}).should('be.visible')
        cy.get('.input-message').type('devine0200@gmail.com')
        cy.get('.send-button').should('be.visible').click()
        cy.contains('Please confirm ',{timeout:10000}).should('be.visible')
        cy.get('.input-message').type('confirm')
        cy.get('.send-button').should('be.visible').click()
        cy.contains('What can I help',{timeout:10000}).should('be.visible')
        cy.get('.input-message').type('6')
        cy.get('.send-button').should('be.visible').click()
        cy.contains('What can I help',{timeout:10000}).should('be.visible')
        cy.get('.input-message').type('Classes from my regular batch are missing ')
        cy.get('.send-button').should('be.visible').click()
        cy.contains('For which dates',{timeout:10000}).should('be.visible')
        cy.get('.input-message').type('15/02/2021')
        cy.get('.send-button').should('be.visible').click()
        cy.contains('For which subjects',{timeout:10000}).should('be.visible')
        cy.get('.input-message').type('Math')
        cy.get('.send-button').should('be.visible').click()
        cy.contains('For which time slots',{timeout:10000}).should('be.visible')
        cy.get('.input-message').type('00:00')
        cy.get('.send-button').should('be.visible').click()
        cy.contains('Would you like to add more ',{timeout:10000}).should('be.visible')
        cy.get('.input-message').type('submit')
        cy.get('.send-button').should('be.visible').click()
        cy.contains('Thank you for talking',{timeout:10000}).should('be.visible')
        

    })
})