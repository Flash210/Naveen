

import testData from '../fixtures/testData.json';

describe('Login Test', () => {
    it('logs in with valid credentials', () => {
        const { username, password } = testData.loginWithValidCredentials;

        //cy.login(username, password); //
        const { invalidEmail, invalidPassword } = testData.loginWithInvalidCredentials;
        cy.login(invalidEmail, invalidPassword);

    });
});