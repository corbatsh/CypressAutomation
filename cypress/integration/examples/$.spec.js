describe('Cypress.$ Function', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Expose jQuery element in the current windows', () => {
        const signInButton = Cypress.$('#signin_button')
        signInButton.click()
    })
})