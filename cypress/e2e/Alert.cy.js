/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

describe("Alerts", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  it.skip("JS Alerts", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsAlert()']").click();
    cy.on("window:alert", (t) => {
      expect(t).to.contains("I am a JS Alert");
    });
    cy.get("#result").should("have.text", "You successfully clicked an alert");
  });

  it("Js Confirm Alert - OK", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsConfirm()']").click();
    cy.on("window:confirm", (t) => {
      expect(t).to.contains("I am a JS Confirm");
    });

    cy.get("#result").should("have.text", "You clicked: Ok");
  });

  it.skip("Js Confirm Alert - Cancel", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsConfirm()']").click();
    cy.on("window:confirm", (t) => {
      expect(t).to.contains("I am a JS Confirm");
    });
    cy.on("window:confirm", () => false);
    cy.get("#result").should("have.text", "You clicked: Cancel");
  });

  it("Js Prompt Alert - Ok", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("welcome");
    });
    cy.get("button[onclick='jsPrompt()']").click();

    cy.get("#result").should("have.text", "You entered: welcome");
  });

  it("Js Prompt Alert - Canceled", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.window().then((win) => {
      cy.stub(win, "prompt").returns(null);
    });
    cy.get("button[onclick='jsPrompt()']").click();
    cy.on("window:prompt", () => false);
    cy.get("#result").should("have.text", "You entered: null");
  });
});
