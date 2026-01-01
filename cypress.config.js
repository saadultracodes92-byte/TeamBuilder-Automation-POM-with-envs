const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://dev.teambuilder.com",
    supportFile: "cypress/support/e2e.js"
  },
  env: {
    baseUrl: "https://dev.teambuilder.com",
    username: "dev_user",
    password: "dev_password"
  }
});