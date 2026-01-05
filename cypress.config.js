const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://client1.dev.teambuilder.io",
    supportFile: "cypress/support/e2e.js"
  },
  env: {
    baseUrl: "https://client1.dev.teambuilder.io",
    username: "dev_user",
    password: "dev_password"
  }
});