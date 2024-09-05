import { Then } from "cypress-cucumber-preprocessor/steps";
import { orderNumberFromPosFunction } from "./When";


Then('Verify on the {string} page',(text)=>{
  cy.verifyURL(text)
})

Then('Verify on the text {string}',(text)=>{
  cy.verifyXpathWithTest(text)
})
Then('Verify transaction detail with card number {string},{string}',(locator,text)=>{
  cy.findKeyInFixtures(locator).then(value => {
    cy.verifyText(value, text);
  });
})
Then('Verify transaction detail with order number {string}',(locator)=>{
  cy.findKeyInFixtures(locator).then(value => {
    cy.verifyText(value, orderNumberFromPosFunction);
  });
})