export var smsCodeValidationKey, userToken;

Cypress.Commands.add("validate", function () {
  cy.postAPI(
    Cypress.env("auth_base_url") + "authorizations/validate",
    {
      "content-type": "application/json",
    },
    {
      email: "virkiyokku@gufum.com",
      password: "Otomasyon123",
    }
  ).then(response => {
    expect(response.status).to.eq(200);
    smsCodeValidationKey = response.body.smsCodeValidationKey;
  });
});

Cypress.Commands.add("loginWithEndpoint", function () {
  cy.postAPI(
    Cypress.env("auth_base_url") + "authorizations/login",
    {
      "content-type": "application/json",
    },
    {
      smsValidateKey: smsCodeValidationKey,
      smsCode: "123456",
    }
  ).then(response => {
    expect(response.status).to.eq(200);
    userToken = response.body.token;
  });
});
