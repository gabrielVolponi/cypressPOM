const baseUrl = Cypress.config("baseUrl");

class Cart {
  visitPage() {
    cy.visit(`${baseUrl}/cart.html`);
  }

  checkUrl() {
    cy.url().should("contains", `${baseUrl}/cart.html`);
  }
}

export default new Cart();
