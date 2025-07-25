
import { RegisterPage } from '../pages/registerPage';
import registerData from '../fixtures/testData.json';

const registerPage = new RegisterPage();

describe('User Registration', () => {
    beforeEach(() => {
        cy.visit('/register');
    });

    it('should register a new user successfully', () => {
        const user = registerData.registerWithValidCredentials;
        registerPage.fillForm(user);
        registerPage.agreeToTerms();
        registerPage.submit();

        cy.contains('Your Account Has Been Created!').should('be.visible');
    });
});
