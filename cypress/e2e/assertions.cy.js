const baseURl =
  "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";

describe("Assertions Tests", () => {
  beforeEach(() => {
    cy.visit(baseURl);
  });

  it("Implicit Assertions", () => {
    let myValue = "";
    cy.url().should("include", "orangehrmlive.com");
    cy.url().should("eq", baseURl);
    cy.url().should("contain", "orangehrmlive");
    cy.get(".oxd-sheet > :nth-child(1)")
      .invoke("text")
      .then((text) => {
        myValue = text.split(":")[1].trim();
      })
      .then(() => {
        cy.get("[name='username']").type(myValue);
      });

    cy.get(".oxd-sheet > :nth-child(2)")
      .invoke("text")
      .then((text) => {
        text = text.split(":")[1].trim();
        cy.get("[name='password']").type(text);
      });
    cy.get(".orangehrm-login-button").click();
  });

  //it("Explicit Assertions", () => {});
});
