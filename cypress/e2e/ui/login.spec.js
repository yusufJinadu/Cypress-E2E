import loginPage from '../../support/page-objects/login/loginPage';
import securePage from '../../support/page-objects/secure/securePage';
const fixture = 'ui/login';
describe('Login functionality should work correctly', function () {
    beforeEach(() => {
        cy.fixture(fixture).then(function ({ correctCredentials, wrongCredentials }) {
            this.correctUsername = correctCredentials.username;
            this.correctPassword = correctCredentials.password;
            this.wrongUsername = wrongCredentials.username;
            this.wrongPassword = wrongCredentials.password;
        });
        cy.visit(`${Cypress.env('fe_base_url') + loginPage.getRoute()} `);
    });
    it('User should be able to login with correct credentials', function () {
        loginPage.tryLogin(this.correctUsername, this.correctPassword);
        cy.url().should('eq', `${Cypress.env('fe_base_url') + securePage.getRoute()}`);
        cy.contains(
            securePage.getLoggedInbanner(),
            securePage.getTexts().loggedInBannerText
        ).should('exist');
    });

    it('User should be unable to login with wrong username', function () {
        loginPage.tryLogin(this.wrongUsername, this.correctPassword);
        cy.url().should('eq', `${Cypress.env('fe_base_url') + loginPage.getRoute()}`);
        cy.contains(
            loginPage.getFailedLoginBanner(),
            loginPage.getTexts().wrongUsernameText
        ).should('exist');
    });

    it('User should be unable to login with wrong password', function () {
        loginPage.tryLogin(this.correctUsername, this.wrongPassword);
        cy.url().should('eq', `${Cypress.env('fe_base_url') + loginPage.getRoute()}`);
        cy.contains(
            loginPage.getFailedLoginBanner(),
            loginPage.getTexts().wrongPasswordText
        ).should('exist');
    });
});
