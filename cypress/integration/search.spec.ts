describe('scroll characters', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
  
    it('should search character by single word', () => {
      cy.get('[data-testid="charCard"]').should('have.length', 15);
      cy.get('[data-testid="searchInput"').type('Walter', { delay: 100});
      cy.get('[data-testid="charCard"]').should('have.length', 2);
    })
    it('should search character by full name', () => {
      cy.get('[data-testid="charCard"]').should('have.length', 15);
      cy.get('[data-testid="searchInput"').type('Walter White', { delay: 100});
      cy.get('[data-testid="charCard"]').should('have.length', 2);
    })

});
  