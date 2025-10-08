/// <reference types="cypress" />

import Login from "../../pages/auth";
import Inventory from "../../pages/inventory";

describe("template spec", () => {
  beforeEach("", () => {
    Login.visitPage();
    Login.checkUrl();
  });
  it("Visit Login Page @smoke", () => {
    Login.visitPage();
  });

  it("Login With Valid Credentials @smoke", () => {
    Login.fillValidCredentials();
    Inventory.checkUrl();
  });

  it("Login With Invalid Credentials", () => {
    Login.fillWrongCredentials();
  });

  it("Login With Locked Out User", () => {
    Login.fillLockedCredentials();
  });

  it("Login With Problem User", () => {
    Login.fillProblemCredentials();
    Inventory.checkUrl();
  });
});
