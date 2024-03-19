
before(() => {
	cy.log('inside before hook')
})

beforeEach(() => {
	cy.log('inside before each hook')
})


describe('Test BeforeHook', () => {

	it('BeforeHook1', () => {

		cy.log('inside the first TC1')

	})

	it('BeforeHook2', () => {

		cy.log('inside the second TC2')

	})

})
it('BeforeHook',()=>{

	cy.log('inside the first TC1')

})