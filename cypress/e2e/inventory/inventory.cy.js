/// <reference types="cypress" />

import Login from "../../pages/auth";
import Inventory from "../../pages/inventory";

describe("template spec", () => {
  beforeEach("", () => {
    Login.visitPage();
    Login.checkUrl();
    Login.fillValidCredentials();
    Inventory.checkUrl();
  });
  it("Visit Inventory Page", () => {
    Inventory.visitPage();
    Inventory.checkUrl();
  });

  it('Add Product to Cart', () => {
    Inventory.addProductToCartById(4) //Sauce Labs Backpack
    Inventory.acessCart();
    Inventory.checkCart('Sauce Labs Backpack')
  });
});
