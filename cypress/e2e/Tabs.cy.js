/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />
describe("Handle Tab-Approach1", () => {
  it.skip("Approach1", () => {
    cy.visit("https://the-internet.herokuapp.com/windows");
    cy.get(".example > a").invoke("removeAttr", "target").click();
    cy.url().should(
      "include",
      "https://the-internet.herokuapp.com/windows/new"
    );
    cy.go("back");
    //cy.get(".example").should("have.text", "New Window");
  });

  it("Approach2", () => {
    cy.visit("https://the-internet.herokuapp.com/windows");
    cy.get(".example > a").then((e) => {
      let url = e.prop("href");
      cy.visit(url);
    });
    cy.wait(3000);
    cy.go("back");
  });
});
