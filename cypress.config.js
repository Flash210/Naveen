const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    baseUrl: 'https://naveenautomationlabs.com/opencart/index.php?route=account',


    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },

});
