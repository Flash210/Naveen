
import { registerLocators } from '../locators/registerLocators';


export class RegisterPage {


    fillForm(user) {
        cy.visit('/register');
        if (!user) return;


        if (user.firstName) {
            cy.get(registerLocators.firstName).type(user.firstName);
        }

        if (user.lastName) {
            cy.get(registerLocators.lastName).type(user.lastName);
        }

        if (user.email) {
            cy.get(registerLocators.email).type(user.email);
        }

        if (user.phone) {
            cy.get(registerLocators.phone).type(user.phone);
        }

        if (user.password) {
            cy.get(registerLocators.password).type(user.password);
        }

        // Allow custom confirm password if provided (for mismatch tests)
        const confirmPassword = user.confirmPassword ?? user.password;
        if (confirmPassword) {
            cy.get(registerLocators.confirmPassword).type(confirmPassword);
        }
    }


    agreeToTerms() {
        cy.get(registerLocators.agreeCheckbox).check();
    }

    submit() {
        cy.get(registerLocators.submitButton).click();
    }


    getErrorMessages() {
        return cy.get('.text-danger'); // or adjust selector as needed
    }

    getAlert() {
        return cy.get('.alert-danger');
    }

}
