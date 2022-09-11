class AuthenticationApi {
    constructor() {
        this._baseUrl = Cypress.env('api_base_url');
        this._token = 'QpwL5tke4Pnpja7X2';
    }

    returnCorrectToken() {
        return this._token;
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
}

export default new AuthenticationApi();
