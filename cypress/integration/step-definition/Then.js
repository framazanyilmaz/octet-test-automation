import { Then } from "cypress-cucumber-preprocessor/steps";



Then("Verify result message {string},{string}", (locator, message) => {
  cy.findKeyInFixtures(locator).then((value) => {
    cy.verifyText(value, message);
  });
});

Then('Verify home page is opened {string},{string}',(locator,text)=>{
  cy.findKeyInFixtures(locator).then((value) => {
    cy.verifyText(value,text);
  });
})
