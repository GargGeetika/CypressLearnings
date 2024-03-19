class checkout
{

    getTotalRow()
    {
        return cy.get('.table > tbody:nth-child(2) > tr > td:nth-child(4)')
    }
    getCheckoutButton()
    {
        return cy.get('.btn-primary')
    }
    getTotalValue()
    {
        return cy.get('h3 > strong')   
    }
    getCheckout()
    {
        return cy.get('.btn-success')
    }

}
export default checkout;