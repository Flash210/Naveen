

import testData from '../fixtures/testData.json';
import { LoginPage } from '../pages/loginPage';

describe('Login Test', () => {
    const loginPage = new LoginPage();

    it('logs in with valid credentials', () => {


        cy.login(testData.loginWithValidCredentials.email, testData.loginWithValidCredentials.password);

    });


    it('shows error for invalid credentials', () => {
        const { email, password } = testData.loginWithInvalidCredentials;
        // loginPage.enterEmail(email).enterPassword(password).submit();
        cy.login(email, password);
        loginPage.getErrorMessage().should('contain', 'Warning');
    });

    it('shows error for empty email', () => {
        const { password } = testData.loginWithValidCredentials.password;
        cy.login('', password);


        loginPage.getErrorMessage().should('contain', testData.ErrorMessages.emptyEmail);
    });

    it('shows error for empty password', () => {
        const { email } = testData.loginWithValidCredentials.email;
        cy.login(email, "");
        loginPage.getErrorMessage().should('contain', testData.ErrorMessages.emptyEmail);
    });

    it('shows error for empty email and password', () => {
        cy.login("", "");
        loginPage.getErrorMessage().should('contain', testData.ErrorMessages.emptyEmail);
    });
});