/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

// https://github.com/nextauthjs/next-auth/discussions/2053#discussioncomment-1191016 :pray::pray::pray:
Cypress.Commands.add('login', () => {
  cy.intercept('/api/auth/session', { fixture: 'session.json' }).as('session');
  console.log(Cypress.env());
  // Set the cookie for cypress.
  // It has to be a valid cookie so next-auth can decrypt it and confirm its validity.
  // This step can probably/hopefully be improved.
  // We are currently unsure about this part.
  // We need to refresh this cookie once in a while.
  // We are unsure if this is true and if true, when it needs to be refreshed.
  cy.setCookie('next-auth.session-token', Cypress.env('SESSION_TOKEN'));
  cy.setCookie(
    '__Secure-next-auth.session-token',
    Cypress.env('SESSION_TOKEN'),
    { secure: true }
  );
});
Cypress.Commands.add('mockAPI', () => {
  cy.intercept('/api/users/count', { fixture: 'count.json' }).as('count');
  cy.intercept('/api/users/count-in-person', { fixture: 'count-in-person.json' }).as('countInPerson');
});

declare global {
  namespace Cypress {
    interface Chainable {
      login(): Chainable<void>;
      mockAPI(): Chainable<void>;
    }
  }
}

export {};
