/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

describe("Handle DropDown", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  it.skip("drop downs handles", () => {
    cy.visit("https://www.zoho.com/commerce/free-demo.html");
    cy.contains("Accept All Cookies").click();
    cy.get("#zcf_address_country")
      .select("United States")
      .should("have.value", "United States");
    cy.get("#zcf_users")
      .select("Yes, I currently sell online")
      .should("have.value", "Yes, I currently sell online");
  });

  it.skip("drop down without select", () => {
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
    cy.get("#select2-billing_country-container").click();

    cy.get(".select2-search__field")
      .type("Italy")
      .should("have.value", "Italy")
      .type("{enter}");

    cy.get("#select2-billing_country-container").should("have.text", "Italy");
  });

  it.skip("Auto Suggestion drop down", () => {
    cy.visit("https://www.wikipedia.org/");
    cy.get("#searchInput").type("Istanbul");
    cy.get(".suggestion-link")
      .contains("Istanbul Technical University")
      .click();
    cy.get("#firstHeading").should(
      "have.text",
      "Istanbul Technical University"
    );
    cy.get("caption")
      .contains("Istanbul Technical University")
      .should("have.text", "Istanbul Technical University");
  });

  it("Dynamic DropDown", () => {
    cy.visit("https://www.google.com/");
    cy.get("textarea[name='q']").type("cypress automation");
    cy.get("div.wM6W7d").should("have.length.above", 11);
    cy.xpath("//div[@class='wM6W7d' and @role='presentation']").each(
      ($el, index, $list) => {
        if ($el.text() === "cypress automation tutorial") {
          cy.wrap($el).click();
        }
      }
    );
    cy.wait(800);
    cy.get("textarea[name='q']").should(
      "have.value",
      "cypress automation tutorial"
    );
    cy.xpath(
      "//div[contains(@data-async-context,'query:')]/div//h3[text()='Cypress Tutorial']"
    ).click();
  });
});
