import {Given, When,Then} from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../Udemy/FrameWork/PageObjects/HomePage"
import checkout from "../../Udemy/FrameWork/PageObjects/checkout"

const homePage=new HomePage
const chckout=new checkout
let fdata

beforeEach(()=>{
    
    cy.fixture('testFramework').then((data)=>{
    
        fdata=data
    })
})

Given('Go to the website',()=>{
    cy.visit(Cypress.env('url')+"/angularpractice/")
    console.log(fdata)

})

When('I select and add products into the cart',()=>{
    homePage.getShopLInk().click()
    fdata.productName.forEach(element => {
        console.log(element)
        cy.SelectProduct(element)
                
    });

    // Then ('find the total price',()=>{
    //     chckout.getCheckoutButton().click()
    //     chckout.getTotalRow().each(($el,index,$list)=>{
    //         if($el.text()!='Total'){
    //             var amt=$el.text().split(' ')[1].trim()
    //             //amt=amt.trim()
    //             console.log ("the amt is "+amt)            
    //             //total= Number(total)+Number(amt)
    //             total=parseInt(total)+ parseInt(amt)
    //             console.log ("the total value of products is "+total)  
    //         }
    //         else return false          

    //     })

    // })

    Then ('find the subtotal',()=>{
            cy.get('h3 > strong').then(function(element){
            subtotal=element.text()
            subtotal=Number(subtotal.split(' ')[1].trim())
            console.log ('the subtotal is ', subtotal)
            expect(subtotal).to.equal(total)
    
           })
    })

    Then('submit the order and verify the message',()=>{
        cy.get('.btn-success').click()
        cy.get('#country').type("India")
        cy.wait(3000)
        cy.get('.suggestions > ul >li >a').click()
        cy.get('#checkbox2').check({force:true})
        cy.get('input.btn').click()
        cy.get('.alert').contains('Success! Thank you!')

    })

    When ('I fill the customer details',()=>{
        homePage.getName().type(fdata.name)
        homePage.getEmail().type(fdata.email)
        homePage.getPwd(fdata.pwd)
        homePage.getIceCreamCheckbox().check().should('be.checked')
        homePage.getGender().select(fdata.gender)
        homePage.getDOB().type('1986-06-10')
    })

    Then('validate the data',()=>{
        homePage.getName().should('have.attr', 'minlength','2')
        homePage.getEmail().should('have.attr','required')
        homePage.getRadioButton().should('be.disabled')
        homePage.getTwoWayDataBinder().should('have.value',fdata.name)
        homePage.getSubmitButton().click()
        cy.contains('div[class="alert alert-success alert-dismissible"]','Success!')

    })

    Then ('I navigate to the shop link',()=>{
        homePage.getShopLInk().click()
    })    

 })