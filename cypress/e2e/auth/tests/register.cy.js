
import { RegisterPage } from '../pages/registerPage';
import registerData from '../fixtures/testData.json';

const registerPage = new RegisterPage();

describe('User Registration', () => {


    it.skip('should register a new user successfully', () => {
        const user = registerData.registerWithValidCredentials;
        registerPage.fillForm(user);
        registerPage.agreeToTerms();
        registerPage.submit();

        cy.contains('Your Account Has Been Created!').should('be.visible');
    });
});

describe('User Registration - Negative Scenarios', () => {


    it('should show error for invalid email format', () => {
        const user = registerData.registerWithInvalidEmail;
        registerPage.fillForm(user);
        registerPage.agreeToTerms();
        registerPage.submit();

        cy.get('.text-danger').should('contain', 'E-Mail Address does not appear to be valid!');
    });

    it('should show required field errors when all fields are empty', () => {
        const user = registerData.registerWithEmptyFields;
        registerPage.fillForm(user);
        registerPage.agreeToTerms();
        registerPage.submit();

        cy.get('.text-danger').should('have.length.at.least', 1); // or check for specific error
    });

    it.skip('should show error for mismatched passwords', () => {
        const user = registerData.registerWithMismatchedPasswords;


        registerPage.agreeToTerms();
        registerPage.submit();

        cy.get('.text-danger').should('contain', 'Password confirmation does not match password!');
    });

    it.skip('should show alert when terms are not accepted', () => {
        const user = registerData.registerWithValidCredentials;
        registerPage.fillForm(user);
        registerPage.submit(); // without agreeing to terms

        cy.get('.alert-danger')
            .should('be.visible')
            .and('contain', 'Warning: You must agree to the Privacy Policy!');
    });
});

