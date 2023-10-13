import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

import {
  countrySelectorComponent,
  countrySelectorButton,
  countrySelectorDropdownMenu,
  mapForSelector,
} from "../../../../common/web-variables";

Then("I see the multi-country selector dropdown menu", () => {
  cy.get(countrySelectorComponent).should("be.visible");
});

Then(
  "The field selected by default in the multi-country selector dropdown menu belongs to the {string} country",
  (country) => {
    cy.get(countrySelectorButton).should(
      "have.text",
      mapForSelector[country]["country"]
    );
  }
);

When("I expand the multi-country dropdown selector", () => {
  cy.get(countrySelectorButton).click();
});

Then(
  "I see different countries from the {string} country under the multi-country dropdown selector",
  (country) => {
    cy.get(countrySelectorDropdownMenu).should("not.contain", country);
  }
);

When(
  "I click in the {string} country field under the multi-country drodpdown selector",
  (country) => {
    cy.get(mapForSelector[country]["selector"]).click();
  }
);

Then(
  "I see the platform changing according to the {string} country and {string} url",
  (country, url) => {
    cy.url().should("eq", `${Cypress.config("baseUrl")}${url}`);
  }
);
