const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

//const {downloadFile} = require('cypress-downloadfile/lib/addPlugin.js')


module.exports = defineConfig({
  chromeWebSecurity: true,
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 50000,
  reporter: 'mochawesome',
  env: {
    //url: 'https://rahulshettyacademy.com'
   // url: 'https://www.flipkart.com'
    url:'https://the-internet.herokuapp.com/'
  },
  retries: {
    runMode: 1,
  },
  projectId: "9satgv",
  

  e2e: {
    setupNodeEvents(on, config) {

      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },

  //   setupNodeEvents(on, config) {
  //     on('task', {downloadFile})
  //  },
    

    
    //calling programming file to here
    //specPattern:'cypress/Integration/Examples/*.js'
    specPattern: 'cypress/Integration/Examples/BDD/*.feature'
     // specPattern: 'cypress/Integration/Examples/BDD/FlipkartWebsite1.feature'
    // specPattern:'cypress/Integration/CypressByJJRefer/*.js' 
    //specPattern: 'cypress/Integration/GreenKart/*.js'
  }
});

