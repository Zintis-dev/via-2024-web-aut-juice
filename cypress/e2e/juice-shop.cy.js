import { BasketPage } from "../pageObjects/BasketPage";
import { DeliveryMethodPage } from "../pageObjects/DeliveryMethodPage";
import { HomePage } from "../pageObjects/HomePage";
import { LoginPage } from "../pageObjects/LoginPage";
import { OrderCompletionPage } from "../pageObjects/OrderCompletionPage";
import { OrderSummaryPage } from "../pageObjects/OrderSummaryPage";
import { PaymentOptionsPage } from "../pageObjects/PaymentOptionsPage";
import { RegisterPage } from "../pageObjects/RegisterPage";

describe("Juice-shop scenarios", () => {
  context("Without auto login", () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it("Login", () => {
      HomePage.accountButton.click();
      HomePage.loginButton.click();
      LoginPage.emailField.type("demo");
      LoginPage.passwordField.type("demo");
      LoginPage.loginButton.click();
      HomePage.accountButton.click();
      HomePage.accountButtonMenu.should("contain.text", "demo");
    });

    it("Registration", () => {

      let email = "testEmail_" + RegisterPage.randomNumber + "@domain.com";
      let password = "password123";

      HomePage.accountButton.click();
      HomePage.loginButton.click();
      LoginPage.notYetACustomerButton.click();
      RegisterPage.passwordField.type(password);
      RegisterPage.repeatPasswordField.type(password);
      RegisterPage.sequrityQuestionDropDown.click();
      RegisterPage.sequrityFavoritePetQuestion.click();
      RegisterPage.sequirityQuestionAnswerField.type("Name");
      RegisterPage.emailField.type(email);
      RegisterPage.registerButton.click();
      LoginPage.emailField.type(email);
      LoginPage.passwordField.type(password);
      LoginPage.loginButton.click();
      HomePage.accountButton.click();
      HomePage.accountButtonMenu.should("contain.text", email);
    });
  });

  context("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
    });

    it("Search and validate Lemon", () => {
      HomePage.searchButton.click();
      HomePage.searchField.type("Lemon{enter}");
      HomePage.searchedProductList.contains("Lemon Juice (500ml)").click();
      HomePage.selectedProductInformation.should("contain.text", "Sour but full of vitamins.");
    });

    context("Multiple cards search", () => {
      beforeEach(() => {
        HomePage.visit();
      });

      it("Search and validate 500ml", () => {
        HomePage.searchButton.click();
        HomePage.searchField.type("500ml{enter}");
        HomePage.searchedProductList.contains("Lemon Juice (500ml)").click();
        HomePage.selectedProductInformation.should("contain.text", "Sour but full of vitamins.");
      });

    });

    context("Search and validate cards", () => {
      beforeEach(() => {
        HomePage.visit();
      });

      it("Search 500ml", () => {
        HomePage.searchButton.click();
        HomePage.searchField.type("500ml{enter}");
        HomePage.searchedProductList.contains("Eggfruit Juice (500ml)").click();
        HomePage.selectedProductInformation.should("contain.text", "Now with even more exotic flavour.");
        HomePage.closeButton.click();
        HomePage.searchedProductList.contains("Lemon Juice (500ml)").click();
        HomePage.selectedProductInformation.should("contain.text", "Sour but full of vitamins.");
        HomePage.closeButton.click();
        HomePage.searchedProductList.contains("Strawberry Juice (500ml)").click();
        HomePage.selectedProductInformation.should("contain.text", "Sweet & tasty!");
      });
    });

    context("Review", () => {
      beforeEach(() => {
        HomePage.visit();
      });

      it("Read and review", () => {
        HomePage.searchButton.click();
        HomePage.searchField.type("King{enter}");
        HomePage.searchedProductList.contains('OWASP Juice Shop "King of the Hill"').click();
        cy.wait(200);
        HomePage.reviewButton.click();
        HomePage.reviewContainer.should("contain.text", "K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!");
      });

      it("Add a review", () => {
        HomePage.searchButton.click();
        HomePage.searchField.type("Raspberry{enter}");
        HomePage.searchedProductList.contains("Raspberry Juice (1000ml)").click();
        cy.wait(200);
        HomePage.reviewTextField.type("Tastes like metal");
        HomePage.reviewSubmitButton.click();
        HomePage.reviewButton.click();
        HomePage.reviewContainer.should("contain.text", "Tastes like metal");
      });

      it("Validate product card amount", () => {
        HomePage.itemsPerPage.should("have.text", "12");
        HomePage.itemsPerPageMenu.click();
        HomePage.itemsPerPageContainer.contains("24").click();
        HomePage.itemsPerPage.should("have.text", "24");
        HomePage.itemsPerPageMenu.click();
        HomePage.itemsPerPageContainer.contains("36").click();
        HomePage.itemsPerPageValidation.should("contain.text", "35 of 35");
      });
    });

    context("Product checkout", () => {
      beforeEach(() => {
        HomePage.visit();
      });

      it("Buy Girlie T-Shirt", () => {
        HomePage.searchButton.click();
        HomePage.searchField.type("Girlie{enter}");
        HomePage.addToBasketButton.click();
        HomePage.productBasketButton.click();
        BasketPage.checkoutButton.click();
        BasketPage.addressContainer.contains("United Fakedom").click();
        BasketPage.continueButton.click();
        DeliveryMethodPage.deliveryMethodTable.contains("Standard Delivery").click();
        DeliveryMethodPage.continueButton.click();
        cy.wait(200);
        PaymentOptionsPage.cardRadioButton.click();
        PaymentOptionsPage.continueButton.click();
        cy.wait(200);
        OrderSummaryPage.placeOrderButton.click();
        OrderCompletionPage.orderConfirmation.should("contain.text", "Thank you for your purchase!");
      });

    });
    // Select card that ends with "5678"
    // Click Continue button
    // Create page object - OrderSummaryPage
    // Click on "Place your order and pay"
    // Create page object - OrderCompletionPage
    // Validate confirmation - "Thank you for your purchase!"

    // Create scenario - Add address
    // Click on Account
    // Click on Orders & Payment
    // Click on My saved addresses
    // Create page object - SavedAddressesPage
    // Click on Add New Address
    // Create page object - CreateAddressPage
    // Fill in the necessary information
    // Click Submit button
    // Validate that previously added address is visible

    // Create scenario - Add payment option
    // Click on Account
    // Click on Orders & Payment
    // Click on My payment options
    // Create page object - SavedPaymentMethodsPage
    // Click Add new card
    // Fill in Name
    // Fill in Card Number
    // Set expiry month to 7
    // Set expiry year to 2090
    // Click Submit button
    // Validate that the card shows up in the list
  });
});
