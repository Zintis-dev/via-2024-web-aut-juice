import { BasePage } from "../pageObjects/basePage";

export class LoginPage extends BasePage {
  static get url() {
    return "/#/login";
  }

  static get elementName() {
    return cy.get("elementSelector");
  }

  static get emailField() {
    return cy.get("[id='email']");
  }

  static get passwordField() {
    return cy.get("[id='password']");
  }

  static get loginButton() {
    return cy.get("[id='loginButton']");
  }

  static get accountButtonMenu() {
    return cy.get("[class='mat-menu-content ng-tns-c129-2']");
  }
}
