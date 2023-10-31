describe("Table", () => {
  beforeEach("Login", () => {
    cy.visit("https://demo.opencart.com/admin/index.php");
    cy.get("#input-username").type("demo");
    cy.get("#input-password").type("demo");
    cy.get(".btn").click();
    cy.get(".btn-close").click();
    cy.get("#menu-customer > .parent").click(); // customer main menu
    cy.xpath("//ul[@class='collapse show']/li/a[text()='Customers']").click();
  });

  it.skip("Check Number Rows & Columns", () => {
    //cy.get(".page-item").should("have.length.above", 10);
    cy.xpath("//form[@id='form-customer']//tr").should("have.length", "11");
  });

  it.skip("Find how many gmail does how rows", () => {
    cy.get("tr > :nth-child(3)").invoke("text").should("contain", "gmail.com");
    cy.log("deneme");
    // should have length of 11
  });

  it.skip("Each all cells", () => {
    cy.get("tbody > tr").each(($row, index, $rows) => {
      cy.wrap($row).within(() => {
        cy.get("td").each(($col, index, $cols) => {
          if ($col.text().includes("@gmail.com")) {
            cy.log($col.text());
          }
        });
      });
    });
  });

  it("Pagination", () => {
    /*let totalPages;
    cy.get(".col-sm-6.text-end").then((e) => {
      let myText = e.text();
      totalPages = myText.substring(
        myText.indexOf("(") + 1,
        myText.indexOf(")") - 1
      );
      cy.log(totalPages);
    });*/

    let totalPages = 10;
    // totalPages forEach then cy log
    for (let p = 1; p <= totalPages; p++) {
      if (p > 1) {
        cy.log("Active Page is == " + p);
        cy.get("ul[class='pagination']>li:nth-child(" + p + ")").click();
        cy.wait(1000);
      }
    }
  });
});
