import { Given } from "cypress-cucumber-preprocessor/steps";
const data = require("../../configs/cypress.base.json");

Given("I am on the home page with {string}", (endpoint) => {
  
    cy.openUrl(data.baseUrl+endpoint);
  
});


