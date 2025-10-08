import { elements as el } from "./elements.js"
const baseUrl = Cypress.config("baseUrl");

class Inventory {
  visitPage() {
    cy.visit(`${baseUrl}/inventory.html`);
  }

  checkUrl() {
    cy.url().should("contains", `${baseUrl}/inventory.html`);
  }

  addProductToCartById(itemId) {
    cy.get(`#item_${itemId}_title_link`)
      .parents(".inventory_item")
      .find(".btn_inventory")
      .click();
  }

  acessCart() {
    cy.get(el.cartIcon).click();
  }

  checkCart(itemName){
    cy.contains(itemName)
  }
}

export default new Inventory();
