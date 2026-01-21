module.exports = {
  e2e: {
    specPattern: [
      "cypress/support/Pages/RegisterPage.js",
      "cypress/support/Pages/LoginPage.js",
      "cypress/support/Pages/CatalogPage.js"
    ],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
}
