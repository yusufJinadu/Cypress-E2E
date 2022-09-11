class LoginPage {
	constructor() {
		this._usernameInput = '#username';
        this._passwordInput = '#password';
        this._loginButton = 'button[type="submit"]'
        this._failedLoginBanner = '#flash'
        this._route = '/login'
	}

    getRoute(){
        return this._route
    }

    getUsernameInput(){
        return this._usernameInput
    }

    getPasswordInput(){
        return this._passwordInput
    }

    getLoginButton(){
        return this._loginButton
    }

    getFailedLoginBanner(){
        return this._failedLoginBanner
    }

    getTexts(){
        return {
            wrongUsernameText: 'Your username is invalid!',
            wrongPasswordText: 'Your password is invalid!'
        }
    }

    tryLogin(username, password) {
        cy.get(this.getUsernameInput()).type(username)
        cy.get(this.getPasswordInput()).type(password)
        cy.get(this.getLoginButton()).click()
    }
	
}

export default new LoginPage()
