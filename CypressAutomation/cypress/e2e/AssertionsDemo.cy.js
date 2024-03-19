describe('Assertions Demo', () => {
    it('passes', () => {
        cy.visit('https://example.cypress.io')
        cy.contains('get').click()
        cy.get('#query-btn')
            .should('contain', 'Button')
            .should('have.class', 'query-btn btn btn-primary')
            .should('have.id', 'query-btn')
            .should('be.visible')
            .should('be.enabled')
            //.should('be.selected')
        //.should('be.focused')
        expect(true).to.be.true
        assert.equal(5,5,'Not Equal')
    })
})