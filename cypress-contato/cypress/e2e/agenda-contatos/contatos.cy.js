describe('Testes para a home', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve renderizar 3 contatos iniciais', () => {
        cy.get('.delete').should('have.length', 3)
    })

    it('Deve adicionar um novo contato', () => {
        cy.get('input[type="text"]').type('Bruno Gallotte')
        cy.get('input[type="email"]').type('brunogallotte1@gmail.com')
        cy.get('input[type="tel"]').type('21981353620')
        cy.get('.adicionar').click()
        cy.get('.delete').should('have.length', 4)
    })

    it('Deve remover o primeiro contato da lista', () => {
        cy.get('.delete').first().click()
        cy.get('.delete').should('have.length', 3)
    })

    it('Deve alterar o nome do primeiro contato', () => {
        cy.get('.edit').first().click()
        cy.get('input[type="text"]').clear()
        cy.get('input[type="text"]').type('Nome Alterado')
        cy.get('.alterar').click()
    })
})