import { BasePage } from "./basePage";

export class PaymentOptionsPage extends BasePage {
    static get url() {
        return "payment/shop";
      }

    static get cardRadioButton() {
        return cy.get("[class='mat-radio-button mat-accent']");
    }

    static get continueButton() {
        return cy.get("[aria-label='Proceed to review']");
    }
}