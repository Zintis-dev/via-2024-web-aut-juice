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

  static get searchButton() {
    return cy.get("[id='searchQuery']");
  }

  static get searchField() {
    return cy.get("[id='mat-input-0']");
  }

  static get searchedProductList() {
    return cy.get("[class='mat-grid-list']");
  }

  static get selectedProductInformation() {
    return cy.get("[class='mat-dialog-content']");
  }
  
  static get closeButton() {
    return cy.get("[aria-label='Close Dialog']");
  }

  static get reviewButton() {
    return cy.get("[id='mat-expansion-panel-header-0']");
  }

  static get reviewContainer() {
    return cy.get("[class='mat-tooltip-trigger review-text']");
  }

  static get reviewTextField() {
    return cy.get("[aria-label='Text field to review a product']");
  }

  static get reviewSubmitButton() {
    return cy.get("[id='submitButton']");
  }

  static get itemsPerPage() {
    return cy.get("[id='mat-select-value-1']");
  }

  static get itemsPerPageMenu() {
    return cy.get("[id='mat-select-0']");
  }

  static get itemsPerPageContainer() {
    return cy.get("[role='option']");
  }

  static get itemsPerPageValidation() {
    return cy.get("[class='mat-paginator-range-label']");
  }

  static get addToBasketButton() {
    return cy.get("[aria-label='Add to Basket']");
  }

  static get productBasketButton() {
    return cy.get("[aria-label='Show the shopping cart']");
  }

  static get ordersAndPaymentButton() {
    return cy.get("button[aria-label='Show Orders and Payment Menu']");
  }

  static get mySavedAddressedButton() {
    return cy.get("button[aria-label='Go to saved address page']");
  }

  static get myPaymentOptionButton() {
    return cy.get("button[aria-label='Go to saved payment methods page']");
  }
}
