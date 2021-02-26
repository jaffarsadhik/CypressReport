describe('MoneyControl', function(){

    it('MCLogin', function(){
        cy.visit('https://moneycontrol.stage.verloop.io/livechat?mode=popout&recipe_id=pz44nQqMye8i9x4Nt')
        cy.contains('Welcome to MoneyControl',{timeout:10000}).should('be.visible')
        cy.get('.input-message').type('Moneycontrol Pro')
        cy.get('.send-button').should('be.visible').click()
        cy.contains('please select the relevant',{timeout:10000}).should('be.visible')
        cy.get('.input-message').type('Pro features & access')
        cy.get('.send-button').should('be.visible').click()
        cy.contains('select your query',{timeout:10000}).should('be.visible')
        cy.get('.input-message').type('What are the benefits of MC pro subscription')
        cy.get('.send-button').should('be.visible').click()
        cy.contains('You will enjoy the following benefits',{timeout:10000}).should('be.visible')
        cy.get('.input-message').type('Go back to main menu')
        cy.get('.send-button').should('be.visible').click()
        cy.get('.input-message').type('Others')
        cy.get('.send-button').should('be.visible').click()
        cy.get('.input-message').type('Moneybhai')
        cy.get('.send-button').should('be.visible').click()
        cy.get('.input-message').type('Portfolio')
        cy.get('.send-button').should('be.visible').click()
        cy.contains('please provide a detailed description of your query',{timeout:10000}).should('be.visible')
        cy.get('.input-message').type('test')
        cy.get('.send-button').should('be.visible').click()
        cy.contains('email',{timeout:10000}).should('be.visible')
        cy.get('.input-message').type('test@gmail.com')
        cy.get('.send-button').should('be.visible').click()


    })
})