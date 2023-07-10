describe('Gerenciamento de contato', () => {
    it('Adicionar contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('input').should('have.length', 3)
        cy.get('[type="text"]').type('Teste Viana')
        cy.get('[type="email"]').type('teste@email.com.br')
        cy.get('[type="tel"]').type('2799990000')
        cy.get('.adicionar').click()
        cy.get('li').should('contain', 'Teste Viana')
        cy.get('li').should('contain', 'teste@email.com.br')
        cy.get('li').should('contain', '2799990000')

    })

    it('Editar um contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('input').each(($input) => {
            cy.wrap($input).clear();
        })
        cy.get('[type="text"]').type('Editado Viana')
        cy.get('[type="email"]').type('EditadoViana@email.com.br')
        cy.get('[type="tel"]').type('2799991111')
        cy.get('.alterar').click()


    })

    it('Excluir contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()


    })



})