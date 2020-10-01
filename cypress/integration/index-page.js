describe('Index Page', () => {
    beforeEach(() => {
        cy.log(`Visiting http://localhost:3000`);
        cy.visit('/');
    });

    it('should have a title', () => {
        cy.get('#title').should('have.length', 1);
    });
});
