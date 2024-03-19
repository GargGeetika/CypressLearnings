/// <reference types="cypress"/>

describe('Alerts Frames and windows', () => {

    it('Alerts Frames and windows', () => {

		cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //Alert
        cy.get('#alertbtn').click()
        cy.on('windows:Alert',(str)=>{
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        //confim alert
        cy.get('#confirmbtn').click()
        cy.on('windows:confirm',(str)=>{
            expect(str).to.equal('Hello , Are you sure you want to confirm?')

            


        })

    })

})