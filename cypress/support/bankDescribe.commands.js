Cypress.Commands.add(
  "describeBank",
  (bankNameSearchLocator, bankTransactionLocator) => {
    cy.mouseOverWithXpath("Tanımlamalar");
    cy.xpathWithClickLast("Banka Tanımla");

    cy.findKeyInFixtures(bankNameSearchLocator).then(value => {
      cy.inputText(value, "TurkisBank");
    });

    cy.xpathWithClickLast("Ara");

    cy.findKeyInFixtures(bankTransactionLocator).then(value => {
      cy.clickLocator(value);
    });

    cy.xpathWithClickLast("POS Bilgileri");

    const counter = 3;

    for (let index = 1; i <= counter; index++) {
      cy.xpathWithClickLast("Ekle");
    }

    for (let index = 1; i <= counter; index++) {
      cy.xpath(
        `//body[1]/div[8]/div[1]/div[1]/div[1]/div[1]/section[1]/div[2]/div[2]/div[1]/form[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[${index}]/td[1]/div[1]/div[1]/div[1]/input[1]`
      ).then($input => {
        cy.wrap($input).type("FRY-Test");
      });
    }

    for (let index = 1; i <= counter; index++) {
      cy.xpath(
        `//body[1]/div[8]/div[1]/div[1]/div[1]/div[1]/section[1]/div[2]/div[2]/div[1]/form[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[${index}]/td[2]/div[1]/div[1]/div[1]/input[1]`
      ).then($input => {
        cy.wrap($input).type("FRY-Test-Describe");
      });
    }

    const dataTypes = ["Metin", "Şifre", "Sayı"];

    for (let index = 1; i <= counter; index++) {
      cy.xpath(
        `//body[1]/div[8]/div[1]/div[1]/div[1]/div[1]/section[1]/div[2]/div[2]/div[1]/form[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[${index}]/td[3]`
      ).then($input => {
        cy.wrap($input).click();

        if (index - 1 < dataTypes.length) {
          cy.contains(dataTypes[index - 1]).click();
        } else {
          cy.log("Dizinin sınırları aşıldı");
        }
      });
    }

    for (let index = 1; i <= counter; index++) {
      cy.xpath(
        `//body[1]/div[8]/div[1]/div[1]/div[1]/div[1]/section[1]/div[2]/div[2]/div[1]/form[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[${index}]/td[4]`
      ).then($input => {
        cy.wrap($input).click();
        cy.contains("Görünür").click();
      });
    }

    for (let index = 1; i <= counter; index++) {
      cy.xpath(
        `//body[1]/div[8]/div[1]/div[1]/div[1]/div[1]/section[1]/div[2]/div[2]/div[1]/form[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[${index}]/td[6]`
      ).then($input => {
        cy.wrap($input).type(index);
      });
    }

    for (let index = 1; i <= counter; index++) {
      cy.xpath(
        `//body[1]/div[8]/div[1]/div[1]/div[1]/div[1]/section[1]/div[2]/div[2]/div[1]/form[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[${index}]/td[7]/div[1]/button[1]`
      ).then($input => {
        cy.wrap($input).click();
      });
    }
  }
);
