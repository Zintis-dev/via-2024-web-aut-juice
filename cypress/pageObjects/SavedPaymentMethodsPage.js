import { BasePage } from "./basePage";

export class SavedPaymentMethodsPage extends BasePage{

    static get url() {
        return "/saved-payment-methods";
    }

    static get addAddressButton() {
        return cy.get("[class='mat-expansion-panel mat-elevation-z0 ng-tns-c41-10 ng-star-inserted']");
    }

    static get nameInput() {
        return cy.get("[id='mat-input-1']");
    }

    static get cardInput() {
        return cy.get("[id='mat-input-2']");
    }

    static get expiryMonthDropdown() {
        return cy.get("[id='mat-input-3']");
    }

    static get expiryYearDropdown() {
        return cy.get("[id='mat-input-4']");
    }

    static get submitButton() {
        return cy.get("button[id='submitButton']");
    }

    static get addedCardTable() {
        return cy.get("mat-table[role='table']");
    }
}