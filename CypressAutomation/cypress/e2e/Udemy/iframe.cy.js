/// <reference types="cypress"/>
import 'cypress-iframe'

describe('iframe', () => {


    it('iframe', () => {

	cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.frameLoaded('#courses-iframe')
    cy.iframe().find('a[href="mentorship"]').eq(0).click()


     

    })

    


})


    
