/// <reference types="cypress"/>

describe('Alerts Frames and windows', () => {

    it('Alerts Frames and windows', () => {

		cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //Alert
        cy.get('#opentab').invoke('removeAttr','target').click()

        cy.origin('https://www.qaclickacademy.com/',()=>{
            cy.get("#navbarSupportedContent a[href*='about']").click();
            cy.get(".mt-50 h2").should('contain','QAClick Academy');
        })

    })

})