import { elements as el } from "./elements";
const baseUrl = Cypress.config("baseUrl");

class Login {
  visitPage() {
    cy.visit(baseUrl);
    Cypress.on('fail', (error, runnable) => {
      cy.screenshot('visitPage_failure');
      throw error;
    });
  }

  checkUrl(){
    cy.url().should('contains', baseUrl)
    Cypress.on('fail', (error, runnable) => {
      cy.screenshot('checkUrl_failure');
      throw error;
    });
  }

  fillValidCredentials() {
    cy.get(el.username).type("standard_user", { delay: 0 });
    cy.get(el.password).type("secret_sauce", { delay: 0 });
    cy.get(el.btnLogin).click();
    Cypress.on('fail', (error, runnable) => {
      cy.screenshot('fillValidCredentials_failure');
      throw error;
    });
  }

  fillWrongCredentials(){
    cy.get(el.username).type("test", { delay: 0 });
    cy.get(el.password).type("test", { delay: 0 });
    cy.get(el.btnLogin).click();

    cy.get(el.errorMsg).contains('Epic sadface: Username and password do not match any user in this service');
    Cypress.on('fail', (error, runnable) => {
      cy.screenshot('fillWrongCredentials_failure');
      throw error;
    });
  }

  fillLockedCredentials(){
    cy.get(el.username).type("locked_out_user", { delay: 0 });
    cy.get(el.password).type("secret_sauce", { delay: 0 });
    cy.get(el.btnLogin).click();

    cy.get(el.errorMsg).contains('Epic sadface: Sorry, this user has been locked out.');
    Cypress.on('fail', (error, runnable) => {
      cy.screenshot('fillLockedCredentials_failure');
      throw error;
    });
  }

  fillProblemCredentials(){
    cy.get(el.username).type("problem_user", { delay: 0 });
    cy.get(el.password).type("secret_sauce", { delay: 0 });
    cy.get(el.btnLogin).click();
    Cypress.on('fail', (error, runnable) => {
      cy.screenshot('fillProblemCredentials_failure');
      throw error;
    });
  }

}

export default new Login();
