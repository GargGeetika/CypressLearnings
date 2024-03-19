const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default 
module.exports = defineConfig({
  env:{
    url:"https://rahulshettyacademy.com"
  },
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/BDD/*.feature",
  },
});
