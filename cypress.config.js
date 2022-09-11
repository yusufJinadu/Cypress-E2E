const { defineConfig } = require('cypress');

module.exports = defineConfig({
    env: {
        fe_base_url: 'http://the-internet.herokuapp.com',
        api_base_url: 'https://reqres.in',
    },
    retries: {
        runMode: 3,
        openMode: 3,
    },
    e2e: {
        specPattern: './cypress/e2e/**/*.spec.{js,jsx}',
        setupNodeEvents(on, config) {
            let userCredentials;
            on('task', {
                // Adding getter and setter for multiple variables
                setUserCredentials: (credentials) => {
                    return (userCredentials = credentials);
                },

                getCredentials: () => {
                    return userCredentials;
                },
            });
        },
    },
});
