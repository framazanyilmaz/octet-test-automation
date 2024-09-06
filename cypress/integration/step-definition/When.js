import { When } from "cypress-cucumber-preprocessor/steps";
import { postConnectionData } from "../../support/posConnection.commands";

var locatorCount,
  locatorSingleRatesCount,
  locatorForeignCardCount,
  locatorPersonalCount,
  locatorCommercialCount,
  startRatesForpersonal,
  startRatesForCommercial,
  posNameLocatorCount,
  posNameFromTable,
  transacationIndex;
export var userToken, orderNumberFromPosFunction;
When("Fill on the for email {string}", locator => {
  cy.findKeyInFixtures(locator).then(value => {
    cy.inputTextWithXpath(value, Cypress.env("userTestAutomationEmail"));
  });
});
When("Fill on the for pasword {string}", locator => {
  cy.findKeyInFixtures(locator).then(value => {
    cy.inputTextWithXpath(value, Cypress.env("userTestAutomationPassword"));
  });
});
When("Click button with text {string}", text => {
  cy.xpathWithClick(text);
});
When("Fill otp code with {string}", locator => {
  cy.findKeyInFixtures(locator).then(value => {
    cy.get(value).then($value => {
      locatorCount = $value.length;
      const values = Array.from({ length: locatorCount }, (_, i) =>
        (i + 1).toString()
      );
      $value.each((index, input) => {
        cy.wrap(input).type(values[index]);
      });
    });
  });
});
When("Hover on text with {string}", text => {
  cy.mouseOverWithXpath(text);
});
When("Intercept network {string}", endpoint => {
  cy.interceptDoc(endpoint);
  cy.wait(`@${endpoint}`, { timeout: 500000 }).then(interception => {
    userToken = interception.response.body.token;
    cy.log("userToken: ", userToken);
  });
});
When("Validate with endpoint", () => {
  cy.validate();
});
When("Login with endpoint", () => {
  cy.loginWithEndpoint();
});
When("Fetch banks info", () => {
  cy.fetchBanksInfo();
});
When("Fetch pos connection info", () => {
  cy.posConnectionInfo();
});
When("Click button with first text {string}", text => {
  cy.xpathWithClickFirst(text);
});
When("Click button with last text {string}", text => {
  cy.xpathWithClickLast(text);
});
When("Type text with xpath on the {string},{string}", (locator, text) => {
  cy.findKeyInFixtures(locator).then(value => {
    cy.inputTextWithXpath(value, text);
  });
});
When("Click with on the {string}", locator => {
  cy.findKeyInFixtures(locator).then(value => {
    cy.clickLocator(value);
  });
});
When("Click personal card installment {string}", locator => {
  cy.findKeyInFixtures(locator).then(value => {
    cy.xpath(value).then($value => {
      locatorPersonalCount = $value.length;
      const values = Array.from({ length: locatorCount }, (_, i) =>
        (i + 1).toString()
      );
      cy.log("values: ", values);
      $value.each((index, element) => {
        if (index + 1 > 1 && (index + 1) % 2 !== 0) {
          cy.wrap(element).click();
        }
      });
    });
  });
});
When("Click commercial card installment {string}", locator => {
  cy.findKeyInFixtures(locator).then(value => {
    cy.xpath(value).then($value => {
      locatorCommercialCount = $value.length;
      const values = Array.from({ length: locatorCount }, (_, i) =>
        (i + 1).toString()
      );
      cy.log("values: ", values);
      $value.each((index, element) => {
        if (index + 1 > 1 && (index + 1) % 2 == 0) {
          cy.wrap(element).click();
        }
      });
    });
  });
});
When("Fill single rates {string}", locator => {
  cy.wait(1000);
  cy.findKeyInFixtures(locator).then(value => {
    cy.xpath(value).then($value => {
      locatorSingleRatesCount = $value.length;
    });
  });
  for (let index = 1; index <= locatorSingleRatesCount; index++) {
    cy.xpath(
      `//body[1]/div[9]/div[1]/div[1]/div[1]/form[1]/div[1]/section[1]/div[1]/div[5]/div[1]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[${index}]/td[2]/div[1]/div[1]/div[1]/input[1]`
    ).then($input => {
      cy.wrap($input).type(1);
    });
  }
  for (let index = 1; index <= locatorSingleRatesCount; index++) {
    cy.xpath(
      `//body[1]/div[9]/div[1]/div[1]/div[1]/form[1]/div[1]/section[1]/div[1]/div[5]/div[1]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[${index}]/td[3]/div[1]/div[1]/div[1]/input[1]`
    ).then($input => {
      cy.wrap($input).type(1);
    });
  }
});
When("Fill foreign cards {string}", locator => {
  cy.wait(1000);
  cy.findKeyInFixtures(locator).then(value => {
    cy.xpath(value).then($value => {
      locatorForeignCardCount = $value.length;
    });
  });
  for (let index = 1; index <= locatorForeignCardCount; index++) {
    cy.xpath(
      `//body[1]/div[9]/div[1]/div[1]/div[1]/form[1]/div[1]/section[1]/div[1]/div[7]/div[1]/div[1]/div[3]/div[1]/table[1]/tbody[1]/tr[${index}]/td[2]/div[1]/div[1]/div[1]/input[1]`
    ).then($input => {
      cy.wrap($input).type(1);
    });
  }
  for (let index = 1; index <= locatorForeignCardCount; index++) {
    cy.xpath(
      `//body[1]/div[9]/div[1]/div[1]/div[1]/form[1]/div[1]/section[1]/div[1]/div[7]/div[1]/div[1]/div[3]/div[1]/table[1]/tbody[1]/tr[${index}]/td[3]/div[1]/div[1]/div[1]/input[1]`
    ).then($input => {
      cy.wrap($input).type(1);
    });
  }
});
When("Fill installment rates for personal", () => {
  startRatesForpersonal = 5;
  cy.xpath(
    "//body[1]/div[9]/div[1]/div[1]/div[1]/form[1]/div[1]/section[1]/div[1]/div[6]/div[1]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[1]/td[2]"
  ).type(startRatesForpersonal);
  for (let index = 2; index <= locatorPersonalCount; index++) {
    if (index % 2 !== 0) {
      cy.xpath(
        `//body[1]/div[9]/div[1]/div[1]/div[1]/form[1]/div[1]/section[1]/div[1]/div[6]/div[1]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[${index}]/td[2]`
      ).then($input => {
        startRatesForpersonal = startRatesForpersonal + (1, 5);
        cy.wrap($input).type(startRatesForpersonal);
      });
    }
  }
});
When("Fill installment rates for commercial", () => {
  startRatesForCommercial = 6;
  cy.xpath(
    "//body[1]/div[9]/div[1]/div[1]/div[1]/form[1]/div[1]/section[1]/div[1]/div[6]/div[1]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[1]/td[3]"
  ).type(startRatesForCommercial);
  for (let index = 2; index <= locatorCommercialCount; index++) {
    cy.xpath(
      `//body[1]/div[9]/div[1]/div[1]/div[1]/form[1]/div[1]/section[1]/div[1]/div[6]/div[1]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[${index}]/td[3]`
    ).then($input => {
      cy.wrap($input).type(startRatesForCommercial);
    });
  }
});

When(
  "Get {string} transaction button using index {string}",
  (posName, locator) => {
    /*
  cy.findKeyInFixtures(locator).then(value => {
    cy.xpath(value).then($value => {
      posNameLocatorCount = $value.length;
    });
  });
  for(let index = 1;index<=posNameLocatorCount;index++){
    cy.xpath(`//tbody/tr[${index}]/td[1]`).then(($el)=>{
      posNameFromTable = Cypress._.map($el,"innerText").toString();
      cy.log('posNameFromTable:, ',posNameFromTable)
      if(posNameFromTable.includes(posName)){
        cy.log('index:, ',index)
        transacationIndex = index;
        cy.log('transacationIndex:, ',transacationIndex)
      }
    })
    cy.log('transacationIndex:, ',transacationIndex)
    return cy.wrap(transacationIndex);
  }*/
    cy.wait(1000);
    cy.findKeyInFixtures(locator).then(value => {
      cy.xpath(value).then($value => {
        posNameLocatorCount = $value.length;

        cy.wrap(null)
          .then(() => {
            for (let index = 1; index <= posNameLocatorCount; index++) {
              cy.xpath(`//tbody/tr[${index}]/td[1]`).then($el => {
                posNameFromTable = $el.text().trim();

                cy.log("posNameFromTable: ", posNameFromTable);

                if (posNameFromTable.includes(posName)) {
                  cy.log("index: ", index);
                  transacationIndex = index;
                  return false;
                }
              });
            }
          })
          .then(() => {
            cy.log("Final transacationIndex: ", transacationIndex);
            return cy.wrap(transacationIndex);
          });
      });
    });
  }
);
When("Click transaction button with index", () => {
  cy.wait(1000);
  cy.xpath(`//tbody/tr[${transacationIndex}]/td[5]`).click();
});
When("Type text with on the {string},{string}", (locator, text) => {
  cy.findKeyInFixtures(locator).then(value => {
    cy.inputText(value, text);
  });
});
When("Get order number {string}", locator => {
  cy.findKeyInFixtures(locator).then(value => {
    cy.get(value)
      .invoke("text")
      .then(text => {
        orderNumberFromPosFunction = text;
      });
  });
});
When(
  "Check pos connection info {string},{string}",
  (bankNameSearchLocator, bankTransactionLocator) => {
    if (postConnectionData.length > 0) {
      cy.log("Seçilecek Bankanın Pos Bilgileri Setlenmiş Durumdadır...");
    } else {
      cy.describeBank(bankNameSearchLocator, bankTransactionLocator);
    }
  }
);
When(
  "Click button for tomorrow date {string},{string}",
  (startDateLocator, dayButtonLocator) => {
    cy.findKeyInFixtures(startDateLocator).then(value => {
      cy.clickLocator(value);
    });

    cy.findKeyInFixtures(dayButtonLocator).then(value => {
      cy.get(value).next("button").click();
    });
  }
);
