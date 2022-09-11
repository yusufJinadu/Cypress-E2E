import authenticationApi from '../../support/utils/api/authentication';
describe('Login endpoints should return correct token', function () {
    beforeEach(() => {
        authenticationApi.getUserCredentials();
    });
    it('User should be able to get correct token with login data', function () {
        cy.task('getCredentials').then((credentials) => {
            authenticationApi.login(credentials).then(({ status, statusText, body }) => {
                cy.wrap(status).should('eq', 200);
                cy.wrap(statusText).should('eq', 'OK');
                cy.wrap(body.token).should('eq', authenticationApi.returnCorrectToken());
            });
        });
    });
});
