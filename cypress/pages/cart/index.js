const baseUrl = Cypress.config("baseUrl");

class Cart {
  visitPage() {
    cy.visit(`${baseUrl}/cart.html`);
    Cypress.on('fail', (error, runnable) => {
      cy.screenshot('failure_visitPage');
      throw error;
    });
  }

  checkUrl() {
    cy.url().should("contains", `${baseUrl}/cart.html`);
    Cypress.on('fail', (error, runnable) => {
      cy.screenshot('failure_checkUrl');
      throw error;
    });
  }

  backToShopping(){
    cy.contains('Continue Shopping').should('be.visible').click()
    Cypress.on('fail', (error, runnable) => {
      cy.screenshot('failure_backToShopping');
      throw error;
    });
  }
}

export default new Cart();
