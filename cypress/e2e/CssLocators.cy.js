describe("CSS Locators", () => {
  it("cssLocators", () => {
    cy.visit("http://www.automationpractice.pl/index.php");
    cy.get("#search_query_top").type("T-Shirts"); // id tag is opt
    cy.get("button[name='submit_search']").click();
    cy.get(".lighter").contains("T-Shirts"); // Assertion
    cy.get("#selectProductSort").select("Price: Lowest first");
    cy.get(".ajax_add_to_cart_button").click();
    cy.get(".cross").click();
    //cy.xpath("//a[contains(@title,'shopping cart')]").click();
    cy.get("a[title*='shopping cart'").click();
  });
});
