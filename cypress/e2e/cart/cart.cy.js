/// <reference types="cypress" />

import Cart from "../../pages/cart";
import inventory from "../../pages/inventory";
import Inventory from "../../pages/inventory";

describe("Cart", () => {
  beforeEach(() => {
    Cart.visitPage();
    Cart.checkUrl();
  });

  it("Visit Cart Page", () => {
    Cart.visitPage();
    Cart.checkUrl();
  });

  it("Back to Shopping", () => {
    Cart.backToShopping();
    Inventory.checkUrl();
  });

  it("Should remove item from cart", () => {
    Inventory.visitPage();
    Inventory.addProductToCartById(4);
    Inventory.acessCart();
    cy.contains("REMOVE").should("be.visible").click();
  });
});
