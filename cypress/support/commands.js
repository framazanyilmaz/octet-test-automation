// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const data = require("../configs/cypress.base.json");

// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.Commands.add("openUrl", (URL) => {
  cy.visit(URL);
});
Cypress.Commands.add("verifyURL", (text) => {
  cy.url().should("include", text);
});
Cypress.Commands.add("findKeyInFixtures", (key) => {
  cy.task("readFixtures").then(async (fixtures) => {
    const result = {};
    let value;

    for (const fileName in fixtures) {
      if (fixtures.hasOwnProperty(fileName)) {
        const fixtureData = fixtures[fileName];
        if (fixtureData.hasOwnProperty(key)) {
          result[fileName] = fixtureData[key];
          value = result[fileName];
        }
      }
    }

    return value;
  });
});
Cypress.Commands.add("readFixtures", () => {
  return cy.task("readFixtures").then((fixtures) => {
    return fixtures;
  });
});

Cypress.Commands.add("readFixtureFile", (fileName) => {
  return cy.task("readFixtures").then((fixtures) => {
    return fixtures[fileName];
  });
});

Cypress.Commands.add("takeScreenshot", (screenshotName) => {
  const shouldTakeScreenshot = Cypress.config("takeScreenshot");
  if (shouldTakeScreenshot) cy.screenshot(screenshotName);
});

Cypress.Commands.add("clickIfElementExists", (selector) => {


  return cy.window().then(($window) => {
    const element = $window.document.querySelector(selector);
    if (element) {
      cy.wrap(element).click({ force: true });
    } else {
    }
  });
});

Cypress.Commands.add("openUrlInSameTab", (locator) => {
  cy.get(locator, { timeout: 5000 }).invoke("removeAttr", "target").click();
});

Cypress.Commands.add("verifyLink", (locator) => {
  cy.get(locator).should("have.attr", "href");
});
Cypress.Commands.add("verifAtrValue", (locator, attr, value) => {
  cy.get(locator).invoke("attr", attr).should("eq", value);
});
Cypress.Commands.add("visible", (locator) => {
  cy.get(locator).should("be.visible");
});
Cypress.Commands.add("verifyText", (locator, text) => {
  cy.get(locator).should("be.visible").should("include.text", text);
});
Cypress.Commands.add("verifyTextXpath", (locator, text) => {
  cy.xpath(locator).should("be.visible").should("include.text", text);
});
Cypress.Commands.add("visibleXpath", (locator) => {
  cy.xpath(locator).should("be.visible");
});

Cypress.Commands.add("inputText", (locator, input) => {
 
  cy.waitUntil(() => cy.get(locator).should('not.be.disabled').type(input));
});

Cypress.Commands.add("clickLocator", (locator) => {
  cy.waitUntil(() => cy.get(locator).should("be.visible").click());
});


Cypress.Commands.add("ExplicitWait", (value) => {
  if (value == null) {
    cy.wait(10000);
  } else {
    cy.wait(value);
  }
});

Cypress.Commands.add("xpathWithClick", (text) => {
  const xpathLocator = `//*[text()='${text}']`;

  cy.waitUntil(() => cy.xpath(xpathLocator).should("exist"));

  cy.xpath(xpathLocator).should("include.text", text);

  cy.xpath(xpathLocator).click({ force: true });
});
Cypress.Commands.add("verifyXpathWithTest", (text) => {
  const xpathLocator = `//*[text()='${text}']`;

  cy.waitUntil(() => cy.xpath(xpathLocator).should("be.visible"));
});