// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "cypress-cucumber-attach-screenshots-to-failed-steps";
import "./commands";
import "./banks.commands";
import "./login.commadns";
import "./posConnection.commands";
import "./bankDescribe.commands";
require("cypress-xpath");
require("cypress-wait-until");

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
});
before(() => {
  cy.then(Cypress.session.clearCurrentSessionData);
});

beforeEach(() => {
 // cy.viewport(1080, 1018);
 cy.viewport(1280, 1018)
});



/*
afterEach(() => {
  const screenshotsFolder = Cypress.config("screenshotsFolder");
  if (window.cucumberJson?.generate) {
    const testState = window.testState;
    const stepResult =
      testState.runTests[testState.currentScenario.name][testState.currentStep];
    if (stepResult?.status === 'failed') {
      const scenarioName = testState.currentScenario.name.endsWith(".")
        ? testState.currentScenario.name.substring(
            0,
            testState.currentScenario.name.length - 1
          )
        : testState.currentScenario.name;

      const screenshotFileName = `${testState.feature.name} -- ${scenarioName} (failed).png`;

      cy.readFile(
        `${screenshotsFolder}/${Cypress.spec.name}/${screenshotFileName}`
      ).then((imgData) => {
        if (imgData) {
          stepResult.attachment = {
            media: { type: "image/png" },
            index: testState.currentStep,
            testCase: testState.formatTestCase(testState.currentScenario),
          };
        }
      });
    }
  }
});*/
