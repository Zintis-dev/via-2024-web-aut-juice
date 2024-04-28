import { BasePage } from "./basePage";

export class SavedAddressesPage extends BasePage{

    static get url() {
        return "/address/saved";
    }

    static get addNewAddressButton() {
        return cy.get("button[aria-label='Add a new address']");
    }
}