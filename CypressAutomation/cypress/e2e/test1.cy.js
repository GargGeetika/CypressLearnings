/// <reference types="cypress"/>

it('Google Search', () => {
    cy.visit('https://google.com')
    cy.get('#APjFqb', {timeout:5000}).type('I am groot{Enter}')
    //cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click()
    cy.contains('Videos').click()

})