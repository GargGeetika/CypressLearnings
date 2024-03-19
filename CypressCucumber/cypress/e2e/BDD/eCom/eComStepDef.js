import {Given, When,Then, And} from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../PageObjects/HomePage"
import checkout from "../../PageObjects/checkout"

const homePage=new HomePage
const chckout=new checkout
let fdata
var total=0
var subtotal

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

    And ('find the total price',()=>{
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

    })

    And ('find the subtotal',()=>{
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

    And('validate the data',()=>{
        homePage.getName().should('have.attr', 'minlength','2')
        homePage.getEmail().should('have.attr','required')
        homePage.getRadioButton().should('be.disabled')
        homePage.getTwoWayDataBinder().should('have.value',fdata.name)
        homePage.getGender().should('have.value','Female')
        homePage.getSubmitButton().click()
        cy.contains('div[class="alert alert-success alert-dismissible"]','Success!')

    })

    Then ('I navigate to the shop link',()=>{
        homePage.getShopLInk().click()
    })   
    
    When ('I fill the customer details using dataTable',(dataTable)=>{
        homePage.getName().type(dataTable.rawTable[1][0])
        homePage.getEmail().type(dataTable.rawTable[1][1])        
        homePage.getPwd(dataTable.rawTable[1][2])
        homePage.getIceCreamCheckbox().check().should('be.checked')
        homePage.getGender().select(dataTable.rawTable[1][3])
        homePage.getDOB().type('1986-06-10')
    })

    When ('I fill the customer {string} {string} {string} and {string} details',(name, email,password, gender)=>{
        homePage.getName().type(name)
        homePage.getEmail().type(email)
        homePage.getPwd(password)
        homePage.getIceCreamCheckbox().check().should('be.checked')
        homePage.getGender().select(gender)
        homePage.getDOB().type('1986-06-10')
    })

 })