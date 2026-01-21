module.exports = {
  e2e: {
    specPattern: [
      "cypress/support/Methods/RegisterMethods.js",
      "cypress/support/Methods/CreateCartMethods.js"
    ],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
}
