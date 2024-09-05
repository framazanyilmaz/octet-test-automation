const { defineConfig } = require("cypress");
const fs = require("fs");
const path = require("path");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      const cucumber = require("cypress-cucumber-preprocessor").default;
      on("file:preprocessor", cucumber());
      on("task", {
        readFixtures() {
          const fixturesDir = path.join(__dirname, "cypress/fixtures");
          const fixtures = {};

          fs.readdirSync(fixturesDir).forEach(fileName => {
            if (fileName.endsWith(".json")) {
              const fixturePath = path.join(fixturesDir, fileName);
              const fixtureData = JSON.parse(
                fs.readFileSync(fixturePath, "utf8")
              );
              fixtures[fileName] = fixtureData;
            }
          });

          return fixtures;
        },
      });
    },

    env: {
      userTestAutomationEmail: "virkiyokku@gufum.com",
      userTestAutomationPassword: "Otomasyon123",
      portal_base_url: "https://testportalapi.octet.com.tr/",
      auth_base_url: "https://testidentityapi.octet.com.tr/",
      post_gate_api: "https://testposgateapi.octet.com.tr/",
    },

    specPattern: "cypress/e2e/features/**/*.feature",
    excludeSpecPattern:
      "**/cypress/pages/*,cypress/integration/step-definition/*",
    testIsolation: true,
    experimentalWebKitSupport: true,
    failOnStatusCode: false,
    defaultCommandTimeout: 50000,
    pageLoadTimeout: 50000,
    watchForFileChanges: false,
    video: false,
    videoUploadOnPasses: false,
    requestTimeout: 50000,
    responseTimeout: 50000,
    experimentalMemoryManagement: true,
    numTestsKeptInMemory: 5,
  },
});
