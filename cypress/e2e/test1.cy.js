describe("Test Describe", () => {
  beforeEach(() => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
  });

  it.only("verify title-positive", () => {
    cy.title().should("eq", "OrangeHRM");
  });

  it("verify title-negative", () => {
    cy.title().not("eq", "OrangeHRM123");
  });
});
