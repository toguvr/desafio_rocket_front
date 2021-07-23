describe("buy a product", () => {
  // For desktop view
  context("desktop", () => {
    beforeEach(() => {
      /**
       * Run these tests as if in a desktop browser,
       * with a 720p monitor
       */
      cy.viewport(1280, 720);
    });
    describe("When you visit home", () => {
      it("Should visit home page", () => {
        cy.visit("/");
      });
      describe("buy an item", () => {
        it("Should choose an item and navigate to Product page", () => {
          cy.get("[data-cy=product-item-0]").click();
          cy.url().should("contain", "/product/");
        });
        it("Should add an item and navigate to cart", () => {
          cy.get("[data-cy=button-item]")
            .contains("ADICIONAR AO CARRINHO")
            .click();
          cy.get("[data-cy=cart-button]").click();
          cy.url().should("include", "/cart");
        });
        it("Should checkout", () => {
          cy.get("[data-cy=button-checkout]")
            .contains("Finalizar a compra")
            .click();

          cy.get("[data-cy=success-text]").contains(
            "Compra realizada com sucesso"
          );
        });
      });
    });
  });
  context("iphone-5 resolution", () => {
    beforeEach(() => {
      /**
       * Run these tests as if in a desktop browser,
       * with a 720p monitor
       */
      cy.viewport("iphone-5");
    });
    describe("When you visit home", () => {
      it("Should visit home page", () => {
        cy.visit("/");
      });
      describe("buy an item", () => {
        it("Should choose an item and navigate to Product page", () => {
          cy.get("[data-cy=product-item-0]").click();
          cy.url().should("contain", "/product/");
        });
        it("Should add an item and navigate to cart", () => {
          cy.get("[data-cy=button-item]")
            .contains("ADICIONAR AO CARRINHO")
            .click();
          cy.get("[data-cy=cart-button]").click();
          cy.url().should("include", "/cart");
        });
        it("Should checkout", () => {
          cy.get("[data-cy=button-checkout]")
            .contains("Finalizar a compra")
            .click();

          cy.get("[data-cy=success-text]").contains(
            "Compra realizada com sucesso"
          );
        });
      });
    });
  });
});
