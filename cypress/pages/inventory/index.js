const baseUrl = Cypress.config("baseUrl");

class Inventory {
  visitPage() {
    cy.visit(`${baseUrl}/inventory.html`);
  }

  checkUrl(){
    cy.url().should('contains', `${baseUrl}/inventory.html`)
  }


}

export default new Inventory();
