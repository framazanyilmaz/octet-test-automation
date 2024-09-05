import { Given } from "cypress-cucumber-preprocessor/steps";
const data = require("../../configs/cypress.base.json");

Given("I am on the home page", () => {
  
    cy.openUrl(data.baseUrl);
  
});


