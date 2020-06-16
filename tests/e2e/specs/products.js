describe('Products page', () =>{
    it('Filters product list', () =>{
        cy.visit('http://localhost:8080')
        cy.get('.column.is-4').should('have.length', 14)

        cy.get('input').type('casa')
        cy.get('.column.is-4').should('have.length', 1)

        cy.get('input').clear().type('Guitarra')
        cy.get('.column.is-4').should('have.length', 0)
    })
    it('Añadir Productos al Carrito', () => {
        cy.visit('http://localhost:8080')
        cy.get('input').clear()
        cy.get('.card button.is-pulled-right.is-warning').first().click()
        cy.get('.navbar-burger').click()
        cy.get('span.tag.is-warning').contains('1')
    })
    it('Elimina productos del Carrito', () => {
        cy.visit('http://localhost:8080')
        
        cy.get('.card button.is-pulled-right.is-warning').first().click()
        cy.get('.navbar-burger').click()
        cy.get('[data-testId="card"]').click()
        cy.get('.modal-card-body').find('div.card-content').should('have.length', 1)
        cy.get('.modal-card-body').find('button.is-danger.is-small').click()
        cy.get('.modal-card-body').find('div.card-content').should('have.length', 0)

    })
})