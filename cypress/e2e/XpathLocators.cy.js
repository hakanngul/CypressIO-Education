describe("XPath Locators", () => {
  it.skip("find no of products", () => {
    cy.visit("http://www.automationpractice.pl/index.php");
    cy.xpath("//a[@title='Women']").click();
    cy.xpath(
      "//ul[@class='product_list grid row']//li[contains(@class,'ajax_block_product')]"
    ).should("have.length", 7);
  });

  it("chained xpath", () => {
    cy.visit("http://www.automationpractice.pl/index.php");
    cy.xpath("//a[@title='Women']").click();
    cy.xpath("//ul[@class='product_list grid row']")
      .xpath("//li[contains(@class,'ajax_block_product')]")
      .should("have.length", 7);
  });
});
