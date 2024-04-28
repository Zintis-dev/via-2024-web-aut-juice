import { BasePage } from "./basePage";

export class DeliveryMethodPage extends BasePage {
    static get url() {
        return "delivery-method";
      }

    static get deliveryMethodTable() {
        return cy.get("[class='mat-table cdk-table']");
    }

    static get continueButton() {
        return cy.get("[aria-label='Proceed to delivery method selection']");
    }
}