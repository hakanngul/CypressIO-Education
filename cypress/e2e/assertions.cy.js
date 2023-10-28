const baseURl =
  "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";

describe("Assertions Tests", () => {
  beforeEach(() => {
    cy.visit(baseURl);
  });

  it("Implicit Assertions", () => {
    let myValue = "";
    let expectedName = "Gladys Eeya Collings";
    cy.url()
      .should("include", "orangehrmlive.com")
      .and("eq", baseURl)
      .and("contain", "orangehrmlive")
      .and("not.contain", "hakan");

    cy.get(".orangehrm-login-branding > img").should("be.visible").and("exist");

    cy.fixture("selectors.json").then((selectors) => {
      cy.get(selectors.usernameInput).type("Admin");
      cy.get(selectors.passwordInput).type("admin123");
      cy.get(selectors.loginButton).click();
      // cy.get(selectors.profileName).should("contain.text", expectedName);
      //cy.get(selectors.profileName).then((text) => {
      //  let actName = text;
      //  expect(actName).to.eq(expectedName);
      //  assert.equal(actName, expectedName);
      // });
      cy.get(selectors.profileArea).wait(800).should("be.visible").click();
      cy.wait(1000);
      cy.contains(selectors.logoutButton).click();
    });
  });
});
