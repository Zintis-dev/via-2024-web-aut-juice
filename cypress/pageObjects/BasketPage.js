import { BasePage } from "./basePage";

export class BasketPage extends BasePage {
    static get url() {
        return "/#/";
      }

      static get checkoutButton() {
        return cy.get("[id='checkoutButton']");
      }

      static get addressContainer() {
        return cy.get("[class='mat-row cdk-row ng-star-inserted']");
      }

      static get continueButton() {
        return cy.get("[aria-label='Proceed to payment selection']");
      }

}