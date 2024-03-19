/// <reference types="cypress"/>

describe('Veg Ecom site', () => {

	it('Veg ecom site to pull Cashew', () => {

		cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
		cy.viewport(1280, 720)
		cy.get('.search-keyword').type('ca')
		cy.wait(2000)
		cy.get('.product:visible').should('have.length',4)
		//parent child chaining
		cy.get('.products').find('.product').should('have.length',4)
		cy.get('.products').find('.product').eq(3).contains('ADD TO CART').click().then(()=>{
			console.log("Resolve promise by adding a then function")
		})
		//each function to loop and dynamically find the option to click.
		//not using the eq(3) as it might fail if the object is moved to other location
		cy.get('.products').find('.product').each(($e1, index ,$list) =>{

			if(($e1.find('h4.product-name').text()).includes('Cashews')){

				cy.wrap($e1).find('.product-action > button').click()
			}
			
		})
			cy.get('.cart-icon >img').click()
			cy.contains('PROCEED TO CHECKOUT').click()
			cy.get('[style="text-align: right; width: 100%; margin-top: 20px; margin-right: 10px;"] > :nth-child(14)').click()
			
		})

		





	})
