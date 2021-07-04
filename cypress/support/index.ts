// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration

// ***********************************************************
import "cypress-fail-fast";

Cypress.on('uncaught:exception', (err) => {
    console.warn(err);
    return false;
});

Cypress.Commands.add('getElementByTestAttrib', (attrib: string) => {
      cy.get(`[data-test=${attrib}]`);
});


Cypress.Commands.add('clickButton', (buttonLabel: string) => {
  cy.get('button').contains(buttonLabel).click();
});




export default undefined;