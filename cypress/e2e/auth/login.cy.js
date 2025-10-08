/// <reference types="cypress" />

import Login from "../../pages/auth";

describe("template spec", () => {

  beforeEach('', () => {
    Login.visitPage();
    Login.checkUrl();

  })
  it("Visit Login Page", () => {
    Login.visitPage();
  });

  it('Login With Valid Credentials', () => {
    Login.fillValidCredentials();
  });

  it('Login With Invalid Credentials', () => {
    Login.fillWrongCredentials();
  });

  it('Login With Locked Out User', () => {
    Login.fillLockedCredentials();
  });

  it('Login With Problem User', () => {
    Login.fillProblemCredentials();
  });


});
