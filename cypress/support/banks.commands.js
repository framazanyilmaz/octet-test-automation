import { userToken } from "./login.commadns";


var responseLenght,banksObject;
export var banksId;

Cypress.Commands.add("fetchBanksInfo", function () {
    cy.getAPI(
      Cypress.env("portal_base_url") + "banks",
      {
        'token':userToken
      },
    ).then((response) => {
      expect(response.status).to.eq(200);
      const data=response.body
      banksObject = data.find(item => item.fullName === "QNB FİNANSBANK A.Ş.");
      banksId = banksObject.id; 
      //cy.log('responseLenght:, ',data)
      cy.log('banksId: ',banksId)
      return cy.wrap(banksId);
    }); 
  });