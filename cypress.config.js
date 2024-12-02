const { defineConfig } = require('cypress');

module.exports = defineConfig({
  env: {
    username: 'test@kennect.io',
    password: 'Qwerty@1234',
  },
  e2e: {
    specPattern: 'cypress/e2e/**/*.spec.js',
    baseUrl: 'https://gor-pathology.web.app/',
    viewportWidth: 1366,
    viewportHeight: 768,
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    },
  },
});
