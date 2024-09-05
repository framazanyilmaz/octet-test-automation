import { banksId } from "./banks.commands";
import { userToken } from "./login.commadns";



export var postConnectionData;

Cypress.Commands.add('posConnectionInfo',()=>{
    cy.log('banksId: ', banksId)
    cy.getAPI(
        Cypress.env("post_gate_api") + "bankPosConnections/bank/"+banksId,
        {
          'token':userToken,
          'content-type':'application/json'
        },
      ).then((response) => {
        expect(response.status).to.eq(200);
        postConnectionData = response.body;
        cy.log('postConnectionData: ',postConnectionData)
      }); 
})