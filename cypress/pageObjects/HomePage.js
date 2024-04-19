import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get accountButtonMenu() {
    return cy.get("[class='mat-menu-content ng-tns-c129-2']");
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }

  static get accountButton() {
    return cy.get("[id='navbarAccount']");
  }

  static get loginButton() {
    return cy.get("[id='navbarLoginButton']");
  }
}
