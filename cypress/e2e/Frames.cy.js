/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

describe("Frames", () => {
  it.skip("Approach1", () => {
    cy.visit("https://the-internet.herokuapp.com/iframe");
    const iframe = cy
      .get("#mce_0_ifr")
      .its("0.contentDocument.body")
      .should("be.visible")
      .then(cy.wrap);

    iframe.clear().type("Welcome to Cypress {cmd+a}");
    cy.get("button[title='Bold']").click();
  });
  it.skip("Approach2 - by using custom command", () => {
    cy.visit("https://the-internet.herokuapp.com/iframe");
    cy.getIframe("#mce_0_ifr")
      .clear()
      .type("Custom Command \nWelcome to Cypress {cmd+a}");
    cy.get("button[title='Bold']").click();
  });
  it("Approach3 - by using cypress-iframe plugin", () => {
    cy.visit("https://the-internet.herokuapp.com/iframe");
    cy.frameLoaded("#mce_0_ifr"); // loading to iframe
    cy.iframe("#mce_0_ifr").clear().type("Cypress-iframe plugin {cmd+a}");
    cy.get("button[title='Bold']").click();
  });
});
