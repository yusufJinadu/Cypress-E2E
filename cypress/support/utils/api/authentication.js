class AuthenticationApi {
    constructor() {
        this._baseUrl = Cypress.env('api_base_url');
        this._correctToken = 'QpwL5tke4Pnpja7X2';
    }

    returnCorrectToken() {
        return this._correctToken;
    }

    getUserCredentials() {
        return cy
            .request({
                method: 'GET',
                url: `${this._baseUrl}/api/users/2`,
            })
            .then((body) => {
                cy.task('setUserCredentials', { email: body.body.data.email, password: 'pistol' });
            });
    }

    register({ email, password }) {
        return cy.request({
            method: 'POST',
            url: `${this._baseUrl}/api/register`,
            body: { email, password },
        });
    }

    login({ email, password }) {
        return cy.request({
            method: 'POST',
            url: `${this._baseUrl}/api/login`,
            body: { email, password },
        });
    }

    verifyAuthResponse({ status, statusText, body }) {
        cy.wrap(status).should('eq', 200);
        cy.wrap(statusText).should('eq', 'OK');
        cy.wrap(body.token).should('eq', this.returnCorrectToken());
    }
}

export default new AuthenticationApi();
