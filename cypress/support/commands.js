// ***********************************************
// This example commands.js shows you how to
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


Cypress.Commands.add('login', () => {
   
    cy.visit('/');
    cy.get('input[name="email"]').type(Cypress.env('username'));
    cy.get('input[name="password"]').type(Cypress.env('password'));
    // cy.get('button[type="submit"').click();
    cy.contains('button', 'Login').should('be.visible').click();

  });

  Cypress.Commands.add('logout', () => {
    cy.get('button[aria-label="account of current user"]').click(); // Click on account button
    cy.wait(1000)
    cy.contains('Sign out of Lab').click(); // Click on the "Sign out of Lab" button
  });