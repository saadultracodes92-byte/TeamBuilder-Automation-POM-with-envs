
require('dotenv').config({ path: '../../.env' });

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.DEV_BASE_URL,
    supportFile: "cypress/support/e2e.js"
  },
  env: {
    baseUrl: process.env.DEV_BASE_URL,
    username: process.env.SUPER_ADMIN_EMAIL,
    password: process.env.DEV_PWD
  }
});
