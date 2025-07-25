
// export class RegisterPage {


//     webLocators = {
//         firstNameInput: '#input-firstname',
//         lastNameInput: '#input-lastname',
//         emailInput: '#input-email',
//         telephoneInput: '#input-telephone',
//         passwordInput: '#input-password',
//         confirmPasswordInput: '#input-confirm',
//        // agreeCheckbox: 'input[name="agree"]',
//         continueButton: 'input[value="Continue"]',

//         // ✅ Add Newsletter Radio Buttons
//         newsletterYesRadio: 'input[name="newsletter"][value="1"]',
//         newsletterNoRadio: 'input[name="newsletter"][value="0"]',
//         privacyPolicyCheckbox: 'input[name="agree"]',


//     }


//     openUrl() {
//         cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
//     }



//     signUp(firstName, lastName, email, telephone, password, confirmPassword, newsletter = 'yes') {
//         cy.get(this.webLocators.firstNameInput).type(firstName);
//         cy.get(this.webLocators.lastNameInput).type(lastName);
//         cy.get(this.webLocators.emailInput).type(email);
//         cy.get(this.webLocators.telephoneInput).type(telephone);
//         cy.get(this.webLocators.passwordInput).type(password);
//         cy.get(this.webLocators.confirmPasswordInput).type(confirmPassword);

//         // ✅ Select Newsletter Option
//         if (newsletter === 'yes') {
//             cy.get(this.webLocators.newsletterYesRadio).check();
//         } else {
//             cy.get(this.webLocators.newsletterNoRadio).check();
//         }

//         cy.get(this.webLocators.agreeCheckbox).check();
//         cy.get(this.webLocators.continueButton).click();
//     }
//     verifyRegistrationSuccess() {
//         cy.get('.alert-success').should('be.visible');
//     }

// }


export class RegisterPage {

    // ✅ Getters for form inputs
    get firstNameInput() {
        return cy.get('#input-firstname');
    }

    get lastNameInput() {
        return cy.get('#input-lastname');
    }

    get emailInput() {
        return cy.get('#input-email');
    }

    get telephoneInput() {
        return cy.get('#input-telephone');
    }

    get passwordInput() {
        return cy.get('#input-password');
    }

    get confirmPasswordInput() {
        return cy.get('#input-confirm');
    }

    get newsletterYesRadio() {
        return cy.get('input[name="newsletter"][value="1"]');
    }

    get newsletterNoRadio() {
        return cy.get('input[name="newsletter"][value="0"]');
    }

    get privacyPolicyCheckbox() {
        return cy.get('input[name="agree"]');
    }

    get continueButton() {
        return cy.get('input[value="Continue"]');
    }

    get successAlert() {
        return cy.get('.alert-success');
    }

    // ✅ Navigate to the register page
    openUrl() {
        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    }

    // ✅ Fill and submit the registration form
    signUp(firstName, lastName, email, telephone, password, confirmPassword, newsletter = 'yes') {
        this.firstNameInput.type(firstName);
        this.lastNameInput.type(lastName);
        this.emailInput.type(email);
        this.telephoneInput.type(telephone);
        this.passwordInput.type(password);
        this.confirmPasswordInput.type(confirmPassword);

        if (newsletter === 'yes') {
            this.newsletterYesRadio.check();
        } else {
            this.newsletterNoRadio.check();
        }

        this.privacyPolicyCheckbox.check();
        this.continueButton.click();
    }

    // ✅ Verify success message
    verifyRegistrationSuccess() {
        this.successAlert.should('be.visible');
    }
}
