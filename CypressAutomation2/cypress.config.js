const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env:{
    url:"https://rahulshettyacademy.com/"
  },
  e2e: {
    watchForFileChanges:false,
    defaultCommandTimeout:6000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      

    },
  },
});
