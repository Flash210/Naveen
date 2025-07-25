
import { registerLocators } from '../locators/registerLocators';


export class RegisterPage {
    fillForm(user) {
        cy.get(registerLocators.firstName).type(user.firstName);
        cy.get(registerLocators.lastName).type(user.lastName);
        cy.get(registerLocators.email).type(user.email);
        cy.get(registerLocators.phone).type(user.phone);

        cy.get(registerLocators.password).type(user.password);
        cy.get(registerLocators.confirmPassword).type(user.password);
    }

    agreeToTerms() {
        cy.get(registerLocators.agreeCheckbox).check();
    }

    submit() {
        cy.get(registerLocators.submitButton).click();
    }
}
