describe("Check UI Elements", () => {
  let baseUrl = "https://chercher.tech/practice/popups#";
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  beforeEach(() => {
    cy.visit(baseUrl);
  });
  it.skip("Check Box and Radio Buttons", () => {
    cy.get("[title=Women]").eq(0).click();
    cy.get("input#layered_category_4").check().should("be.checked");
    cy.get("input#layered_category_8").check().should("be.checked");
    cy.get("#layered_id_attribute_group_1").check().should("be.checked");
  });

  it.skip("Radio button tests", () => {
    cy.get("#radio").check().should("be.checked");
    cy.get("#checkbox").check().should("be.checked");
    cy.get("#checkbox").uncheck().should("not.be.checked");
    cy.get("[name=upload]").then((input) => {
      const file = new File(["test"], "test.txt", { type: "text/plain" });
      const fileList = new DataTransfer();
      fileList.items.add(file);
      input[0].files = fileList.files;
      cy.wrap(input).trigger("change", { force: true });
    });
  });

  it("checker", () => {
    cy.get("#checkbox").first().check().should("be.checked");
    cy.get("#radio").last().check().should("be.checked");
  });
});
