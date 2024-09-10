# Octet-Web-Automation

Test Automation for Octet using Cypress + Cucumber 


# Installation
npm install
npx cypress open


# Tech Stack:


JavaScript

BDD Framework : Cucumber

Reporting : Mulitple Cucumber HTML Report

CI/CD : Jenkins

Cypress

# How to run using Command Line:


After installing all the dependencies (cypress, cucumber) , run the below command:
Pls review package.json file for script


npm run TestWithReportGeneration

if you want to execute using Jenkins pls review Jenkins File. You can change or add feature parametre also, if you wanna 
deploy your test report any cloud you can using. Before the running please chekc your Cypress version. If your Cypress version <13
you may change testIsolation: 'strict', with true or false in the cypress.config.js file.
