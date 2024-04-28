import { BasePage } from "./basePage";

export class CreateAddressPage extends BasePage{

    static get url() {
        return "/address/saved";
    }

    static get countryInput() {
        return cy.get("input[data-placeholder='Please provide a country.']");
    }

    static get nameInput() {
        return cy.get("input[data-placeholder='Please provide a name.']");
    }

    static get numberInput() {
        return cy.get("input[data-placeholder='Please provide a mobile number.']");
    }

    static get zipCodeInput() {
        return cy.get("input[data-placeholder='Please provide a ZIP code.']");
    }

    static get addressInput() {
        return cy.get("[id='address']");
    }

    static get cityInput() {
        return cy.get("input[data-placeholder='Please provide a city.']");
    }

    static get stateInput() {
        return cy.get("input[data-placeholder='Please provide a state.']");
    }

    static get submitButton() {
        return cy.get("button[id='submitButton']");
    }

    static get addedAddressTable() {
        return cy.get("[class='mat-table cdk-table ng-star-inserted']");
    }
}