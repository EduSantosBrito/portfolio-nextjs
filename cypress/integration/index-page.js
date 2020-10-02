describe('Index Page', () => {
    beforeEach(() => {
        cy.log(`Visiting http://localhost:3000`);
        cy.visit('/');
    });

    it('should have a header', () => {
        cy.get('#header').should('have.length', 1);
    });
});
