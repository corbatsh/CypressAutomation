describe('Browser actions', () => {
    it('should load books website', () => {
        cy.visit('https://books.toscrape.com/index.html', {timeout: 10000})
        cy
            .url()
            .should('include','index.html')
        cy.log('Before Reload')
        cy.reload()
        cy.log('After Reload')
    })

    it('should click on Travel category', () => {
        cy
            .get('a')
            .contains('Travel')
            .click()
        cy.get('h1').contains('Travel')
    })

    it('should display correct number of books', () => {
        cy
            .get('.product_pod')
            .its('length')
            .should('eq', 11)
    })

    it('should click on poetry category"', () => {
        cy
            .get('a')
            .contains('Poetry')
            .click()
    })

    it('should click on the Olio book details', () => {
        cy
            .get('a')
            .contains('Olio')
            .click()
    })

    it('should check the price of the book', () => {
        cy
            .get('.col-sm-6.product_main')
            .should('contain', '£23.88')
    })
})