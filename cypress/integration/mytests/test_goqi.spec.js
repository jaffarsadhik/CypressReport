describe('Client:Goqii,Recipe:bBPicT8cPraR2TbpT', function(){

    it('GoqiIssues', function(){
        cy.visit('https://goqii.verloop.io/livechat?mode=popout&recipe_id=bBPicT8cPraR2TbpT')
        cy.contains('How can I help ',{timeout:20000}).should('be.visible')
        cy.contains('Help with GOQii Fitness Tracker').should('be.visible').click()
        cy.contains('What do you need help',{timeout:10000}).should('be.visible')
        cy.contains('I am facing issue with the Tracker').should('be.visible').click()
        cy.contains('which tracker ',{timeout:10000}).should('be.visible')
        cy.contains('GOQii Smart Vital').should('be.visible').click()
        cy.contains('frequently asked questions',{timeout:20000}).should('be.visible')
        cy.get('.templ-buttons > :nth-child(3)').click()
        cy.contains('choose an option',{timeout:20000}).should('be.visible')
        cy.contains('My tracker is not getting charged').click()
        cy.contains('We wish to inform you that your GOQii Smart vital tracker',{timeout:20000}).should('be.visible')
        cy.contains('Yes, my query is resolved').click()
        cy.contains('I loved talking to you',{timeout:20000}).should('be.visible')
        

    })
})