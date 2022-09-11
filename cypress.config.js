const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    fe_base_url: 'http://the-internet.herokuapp.com'
  },
  e2e: {
    specPattern: './cypress/e2e/**/*.spec.{js,jsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
