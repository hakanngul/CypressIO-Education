describe("Check UI Elements", () => {
  let baseURl = "https://demoqa.com";
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  it("Checking Radio Buttons", () => {
    cy.visit(baseURl + "/radio-button");
    //cy.contains("Impressive").should("be.visible").click();
    //cy.get(".text-success").invoke("text").should("eq", "Impressive");
    //cy.contains("Yes").should("be.visible").click();
    //cy.get(".text-success").invoke("text").should("eq", "Yes");

    cy.contains("Impressive").should("be.visible");
    // Select the radio button by ID
    cy.get("label[for='yesRadio']").click();
  });
});
