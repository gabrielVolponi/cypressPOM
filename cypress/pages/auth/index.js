const baseUrl = Cypress.config("baseUrl");

class Login {
  visitPage() {
    cy.visit(baseUrl);
  }

  checkUrl(){
    cy.url().should('contains', baseUrl)
  }

  fillValidCredentials() {
    cy.get('[data-test="username"]').type("standard_user", { delay: 0 });
    cy.get('[data-test="password"]').type("secret_sauce", { delay: 0 });
    cy.get('[id="login-button"]').click();
  }

  fillWrongCredentials(){
    cy.get('[data-test="username"]').type("test", { delay: 0 });
    cy.get('[data-test="password"]').type("test", { delay: 0 });
    cy.get('[id="login-button"]').click();

    cy.get('[data-test="error"]').contains('Epic sadface: Username and password do not match any user in this service');
  }

  fillLockedCredentials(){
    cy.get('[data-test="username"]').type("locked_out_user", { delay: 0 });
    cy.get('[data-test="password"]').type("secret_sauce", { delay: 0 });
    cy.get('[id="login-button"]').click();

    cy.get('[data-test="error"]').contains('Epic sadface: Sorry, this user has been locked out.');
  }

  fillProblemCredentials(){
    cy.get('[data-test="username"]').type("problem_user", { delay: 0 });
    cy.get('[data-test="password"]').type("secret_sauce", { delay: 0 });
    cy.get('[id="login-button"]').click();
  }

}

export default new Login();
