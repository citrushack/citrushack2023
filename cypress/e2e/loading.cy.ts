describe('Performance', () => {
  it('measures page load on the home page', () => {
    const MAX_LOAD_TIME = 3000;
    cy.visit('/', {
      onBeforeLoad: (win) => {
        win.performance.mark('start-loading');
      },
    })
      .its('performance')
      .then((performance) => {
        // add separate assertions for every big asset we add in
        cy.get('[alt="skyline"]').should('be.visible');
        cy.get('[alt="Postcard"]').should('be.visible');
        cy.get('[alt="Suitcases"]').should('be.visible');
        cy.url()
          .should('include', '/')
          .then(() => performance.mark('end-loading'))
          .then(() => {
            performance.measure('pageLoad', 'start-loading', 'end-loading');
            // Retrieve the timestamp we just created
            const measure = performance.getEntriesByName('pageLoad')[0];
            // This is the total amount of time (in milliseconds) between the start and end
            const duration = measure.duration;
            cy.log('Page load took: ' + duration);
            assert.isAtMost(duration, MAX_LOAD_TIME);
          });
      });
  });
});

export {};
