/// <reference types="cypress" />
describe('scroll characters', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('http://localhost:3000/')
    })
  
    it('should scroll infinitely', () => {
      cy.get('[data-testid="charCard"]').should('have.length', 15);
      cy.scrollTo('bottom', { duration: 1000});
      cy.get('[data-testid="charCard"]').should('have.length', 30);
      cy.scrollTo('bottom', { duration: 1000});
      cy.get('[data-testid="charCard"]').should('have.length', 45);
      cy.scrollTo('bottom', { duration: 1000});
      cy.contains('Yay! You have seen it all 😎');
    })

});
  