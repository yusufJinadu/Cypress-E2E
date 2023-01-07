import authenticationApi from '../../support/utils/api/authentication';
describe('Login endpoints should return correct token', function () {
    beforeEach(() => {
        authenticationApi.getUserCredentials();
    });
    it('User should be able to get correct token with login data', function () {
        cy.task('getCredentials').then((credentials) => {
            authenticationApi.login(credentials).then((token) => {
                authenticationApi.verifyAuthResponse(token);
            });
        });
    });
});
