class SecurePage {
	constructor() {
        this._route = '/secure'
        this._loggedInBanner = '#flash'
	}

    getRoute(){
        return this._route
    }

    getLoggedInbanner(){
        return this._loggedInBanner
    }

    getTexts(){
        return {
            loggedInBannerText: 'You logged into a secure area!'
        }
        
    }
  
	
}

export default new SecurePage()