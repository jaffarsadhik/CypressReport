describe('Aldar', function(){

    it('buyandconnecttoagent', function(){

         cy.visit('https://aldar.verloop.io/livechat?mode=popout&recipe_id=nSxK3YiSmRwmJMhmP')
         cy.contains('full name',{timeout:10000}).should('be.visible')
         cy.get('.input-message').type('Jaffar Ayubkhan')
         cy.get('.send-button').should('be.visible').click()
         cy.contains('assist',{timeout:10000}).should('be.visible')
         cy.get('.input-message').type('1')
         cy.get('.send-button').should('be.visible').click()
         cy.contains('preferred location',{timeout:10000}).should('be.visible')
         cy.get('.input-message').type('yas island')
         cy.get('.send-button').should('be.visible').click()
         cy.contains('unit types',{timeout:10000}).should('be.visible')
         cy.get('.input-message').type('penthouse')
         cy.get('.send-button').should('be.visible').click()
         cy.contains('bedroom',{timeout:10000}).should('be.visible')
         cy.get('.input-message').type('1')
         cy.get('.send-button').should('be.visible').click()
         cy.contains('projects',{timeout:10000}).should('be.visible')
         cy.get('.input-message').type('mamsha')
         cy.get('.send-button').should('be.visible').click()
         cy.contains('Selected:',{timeout:10000}).should('be.visible')
         cy.get('.input-message').type('yes')
         cy.get('.send-button').should('be.visible').click()
         cy.contains('mobile number',{timeout:10000}).should('be.visible')
         cy.get('.input-message').type('+97178765478')
         cy.get('.send-button').should('be.visible').click()
         cy.contains('email',{timeout:10000}).should('be.visible')
         cy.get('.input-message').type('jaffar@verloop.io')
         cy.get('.send-button').should('be.visible').click()
         cy.contains('country',{timeout:10000}).should('be.visible')
         cy.get('.input-message').type('India')
         cy.get('.send-button').should('be.visible').click()
         cy.contains('agents',{timeout:10000}).should('be.visible')
         cy.get('.input-message').type('verloop test')
         cy.get('.send-button').should('be.visible').click()
         
        
        });
        
    })

        