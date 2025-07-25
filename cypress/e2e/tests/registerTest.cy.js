import { RegisterPage } from '../../pages/registerPage';
import registerData from '../fixtures/registerData.json';

const register = new RegisterPage();

describe('Register Test', () => {
    it('should register a new user', () => {
        register.openUrl();
        register.signUp(
            registerData.firstName,
            registerData.lastName,
            registerData.email,
            registerData.phone,
            registerData.password,
            registerData.confirmPassword,
            registerData.newsletter
        );
        register.verifyRegistrationSuccess();
    });
});
