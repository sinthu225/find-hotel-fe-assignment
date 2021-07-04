// load type definitions that come with Cypress module
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select DOM element by data-cy attribute.
     * @example cy.dataCy('greeting')
    */
    login(username, password): Chainable<Element>
    getIframeBody(): Chainable<Element>;
    logout(): Chainable<Element>
    getElementByTestAttrib(attrib): Chainable<Element>
    clickButton(attrib): Chainable<Element>
  }
}