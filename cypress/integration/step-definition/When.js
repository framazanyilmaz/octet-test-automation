import { When } from "cypress-cucumber-preprocessor/steps";

When("User type integer {string},{string}", (locator,input) => {
  cy.findKeyInFixtures(locator).then((value) => {
    cy.inputText(value, input);
  });
});


When("User clikcs button {string}", (locator) => {
  cy.findKeyInFixtures(locator).then((value) => {
    cy.clickLocator(value);
  });
});

