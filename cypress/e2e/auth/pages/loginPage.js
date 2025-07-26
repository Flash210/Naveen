
import { LoginSelectors } from '../locators/loginLocators';
export class LoginPage {

    visit() {
        cy.visit('/login');
        return this;
    }
    fillCredentials(email, password) {


        if (!email) {
            cy.get(LoginSelectors.emailField).clear();
        } else {
            cy.get(LoginSelectors.emailField).clear().type(email);
        }

        if (!password) {
            cy.get(LoginSelectors.passwordField).clear();
        } else {
            cy.get(LoginSelectors.passwordField).clear().type(password);
        }



        return this;
    }


    submit() {

        cy.get(LoginSelectors.submitButton).click();
        return this;
    }

    getErrorMessage() {
        return cy.get('.alert-danger'); // Update selector to match your app
    }
}

