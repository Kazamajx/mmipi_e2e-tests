import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then("I see the {string} with {string} language", (url, language) => {
  cy.getLanguage(url).then((languageBE) => {
    expect(languageBE).to.be.eq(language);
  });
});

Then("I see the {string} with {string} currency", (url, currency) => {
  cy.getCurrency(url).then((currencyBE) => {
    expect(currencyBE).to.be.eq(currency);
  });
});

Then("I see the {string} url in the searchbar", (url) => {
  cy.url().should("eq", `${Cypress.config("baseUrl")}${url}`);
});
