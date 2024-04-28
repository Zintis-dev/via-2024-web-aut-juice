import { BasePage } from "./basePage";

export class OrderCompletionPage extends BasePage {
    
    static get orderConfirmation() {
        return cy.get("[class='confirmation']");
    }
}