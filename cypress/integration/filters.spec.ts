/// <reference types="cypress" />
//@ts-check
describe('scroll characters', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
  
    it('should apply status filter', () => {
      cy.get('[data-testid="charCard"]').should('have.length', 15);
      cy.get('[data-testid="filter-Status"]').click();
      cy.get('[data-testid="select-Presumed dead"]').click();
      cy.get('[data-testid="charCard"]').should('have.length', 1);
   
    })

    it('should apply season filter', () => {
      cy.get('[data-testid="charCard"]').should('have.length', 15);
      cy.get('[data-testid="filter-Season"]').click();
      cy.get('[data-testid="select-1"]').click();
      cy.get('[data-testid="charCard"]').should('have.length', 9);
    });
});
  