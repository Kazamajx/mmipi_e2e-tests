import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then(
  "I see the correct data on the {string} module on {string} url choosing {string} filter {string} price and {string} time category",
  (module, url, filter, buttonPrice, buttonTime) => {
    cy.assertDataInsights(url, filter, buttonPrice, buttonTime);
  }
);
