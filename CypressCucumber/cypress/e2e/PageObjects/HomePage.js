class HomePage
{

    getName()
    {
        return cy.get(':nth-child(1) > .form-control')
    }
    getEmail()
    {
        return cy.get('input[name="email"]')
    }
    getPwd()
    {
        return cy.get('#exampleInputPassword1')
    }
    getIceCreamCheckbox()
    {
        return cy.get('#exampleCheck1')
    }
    getDOB()
    {
        return cy.get('input[name="bday"]')
    }

    getTwoWayDataBinder()
    {
        return  cy.get(':nth-child(4) > .ng-untouched')

    }

    getGender()
    {
        return  cy.get('#exampleFormControlSelect1')

    }

    getRadioButton()
    {
        return cy.get('#inlineRadio3')

    }
    getShopLInk()
    {
        return cy.get(':nth-child(2) > .nav-link')

    }

    getSubmitButton()
    {
        return cy.get('.btn')

    }
}

export default HomePage;