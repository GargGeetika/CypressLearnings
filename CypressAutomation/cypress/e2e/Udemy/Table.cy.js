/// <reference types="cypress"/>

describe('Tables', () => {

    it('Tables', () => {

	cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    //console.log('outside1')

    cy.get('tr td:nth-child(2)').each(($e1,index,$list)=>{
        console.log('outside2')
        if(($e1.text()).includes('Python')){
            console.log('outside3')
            cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
            {
                console.log(price.text())
                expect(price.text()).eql('25')
            })
            
            
        }

        

    })
        

    })

})


    
