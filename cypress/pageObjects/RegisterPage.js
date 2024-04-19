export class RegisterPage {
    static get url() {
        return "/#/register";
    }

    static get randomNumber() {
        return Math.floor(Math.random() * 1000);
    }

    static get emailField() {
        return cy.get("[id='emailControl']");
    }

    static get passwordField() {
        return cy.get("[id='passwordControl']");
    }

    static get repeatPasswordField() {
        return cy.get("[id='repeatPasswordControl']");
    }

    // The number differed between browsers for the same option
    static get sequrityQuestionDropDown() {
        return cy.get("[id='mat-select-2']");
    }

    // The number differed between browsers for the same option
    static get sequrityFavoritePetQuestion() {
        return cy.get("[id='mat-option-9']");
    }

    static get sequirityQuestionAnswerField() {
        return cy.get("[id='securityAnswerControl']");
    }

    static get registerButton() {
        return cy.get("[id='registerButton']");
    }
}