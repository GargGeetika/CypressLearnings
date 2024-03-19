/// <reference types="cypress"/>


describe('MouseOver', () => {


    it('MouseOver using show', () => {

	cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    
       cy.get('div .mouse-hover-content').invoke('show') 
       cy.get('div.mouse-hover-content a[href="#top"]').click()
       cy.url().should('include','top')

    })

    it('MouseOver using force', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
           //cy.get('div .mouse-hover-content').invoke('show') 
           cy.contains('Reload').click({force: true})
           
    
        })




})


    
