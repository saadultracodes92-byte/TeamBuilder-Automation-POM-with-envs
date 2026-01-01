
require('dotenv').config({ path: '../../.env' });

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.DEV_BASE_URL,
    supportFile: "cypress/support/e2e.js",
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'chrome' || browser.name === 'chromium') {
          launchOptions.args.push('--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
        }
        return launchOptions;
      });
      on('uncaught:exception', (err, runnable) => {
        return false;
      });
    }
  },
  env: {
    baseUrl: process.env.DEV_BASE_URL,
    username: process.env.SUPER_ADMIN_EMAIL,
    password: process.env.DEV_PWD
  }
});
