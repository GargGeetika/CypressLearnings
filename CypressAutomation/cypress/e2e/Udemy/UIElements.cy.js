/// <reference types="cypress"/>

describe('UI Elements', () => {

    it('Practise Diff UI Elements', () => {

		cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //checkboxes
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value','option1')
        cy.get('input[type="checkbox"]').check(['option3','option2'])

        //static dropdown
        cy.get('#dropdown-class-example').select('option2').should('have.value','option2')

        //Dynamic dropdown
        cy.get('#autocomplete').type('In')
        cy.get('.ui-menu-item div').each(($e1,index,$list)=>{
            if (($e1.text()==='India'))
                cy.wrap($e1).click()
            
        })
        cy.get('#autocomplete').should('have.value','India')

        //show and hide visible and elements

        if(cy.get('#displayed-text').should('be.visible')){
            cy.get('#hide-textbox').click()
            cy.get('#displayed-text').should('not.be.visible')
        }
        
        if(cy.get('#displayed-text').should('not.be.visible')){
            cy.get('#show-textbox').click()
            cy.get('#displayed-text').should('be.visible')
        }

        //Radio buttons
        cy.get('input[value="radio2"]').check().should('be.checked')


    })

})