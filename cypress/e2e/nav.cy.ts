describe('Navigation', () => {
  it('should navigate back to the home page', () => {
    // cy.visit(Cypress.env('host') + '404', {failOnStatusCode: false})
    cy.visit('/404', { failOnStatusCode: false });
    cy.request({ url: '/404', failOnStatusCode: false })
      .its('status')
      .should('equal', 404);
    cy.contains('Go Back to Homepage').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });
});

export {};
