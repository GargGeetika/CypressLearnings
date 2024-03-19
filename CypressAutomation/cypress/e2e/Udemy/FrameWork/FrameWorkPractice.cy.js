/// <reference types="cypress"/>
import HomePage from "./PageObjects/HomePage"
import checkout from "./PageObjects/checkout"

describe('Framework first TC', ()=> {
    let data
    var total=0
    var subtotal

    const homePage=new HomePage
    const chckout=new checkout
    before(function(){

        cy.fixture('testFramework').then((fdata)=>{
            //console.log (fdata)
            data=fdata
        })
    })

    it('Framework first TC-homepage', () => {

        cy.visit(Cypress.env('url')+"/angularpractice/")
        //cy.visit('https://rahulshettyacademy.com/angularpractice/')
        homePage.getName().type(data.name)
        homePage.getName().should('have.attr', 'minlength','2')
        homePage.getEmail().type(data.email)
        homePage.getEmail().should('have.attr','required')
        homePage.getPwd(data.pwd)
        homePage.getIceCreamCheckbox().check().should('be.checked')
        homePage.getGender().select(data.gender)
        homePage.getRadioButton().should('be.disabled')
        homePage.getDOB().type('1986-06-10')
        homePage.getTwoWayDataBinder().should('have.value',data.name)
        homePage.getSubmitButton().click()
        cy.contains('div[class="alert alert-success alert-dismissible"]','Success!')
        homePage.getShopLInk().click()

    })

    it('checkout page TCs', ()=>{  
        cy.visit(Cypress.env('url')+"/angularpractice/shop")   
       // cy.visit('https://rahulshettyacademy.com/angularpractice/shop') 
        
        //custom function called SelectProduct. look at command.js
        data.productName.forEach(element => {
            //console.log(element)
            cy.SelectProduct(element)           
        });
                
        chckout.getCheckoutButton().click()
        chckout.getTotalRow().each(($el,index,$list)=>{
            if($el.text()!='Total'){
                var amt=$el.text().split(' ')[1].trim()
                //amt=amt.trim()
                console.log ("the amt is "+amt)            
                //total= Number(total)+Number(amt)
                total=parseInt(total)+ parseInt(amt)
                console.log ("the total value of products is "+total)  
            }
            else return false          

        })

       cy.get('h3 > strong').then(function(element){
        subtotal=element.text()
        subtotal=Number(subtotal.split(' ')[1].trim())
        console.log ('the subtotal is ', subtotal)
        expect(subtotal).to.equal(total)

       })

       cy.get('.btn-success').click()
       cy.get('#country').type("India")
       cy.wait(3000)
       cy.get('.suggestions > ul >li >a').click()
       cy.get('#checkbox2').check({force:true})
       cy.get('input.btn').click()
       cy.get('.alert').contains('Success! Thank you!')
    
    })

})