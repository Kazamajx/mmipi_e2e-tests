import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

import {
  editAllFilterSelectedText,
  editEditButton,
  editLocationInput,
  editFirstLocation,
  editApplyButton,
  editPriceCategoryDropdownMenu,
  mapForPriceCategoryDropdownMenu,
  editBusinessHoursDropdownMenu,
  mapForBusinessHoursDropdownMenu,
} from "../../../../common/web-variables";

import { aliasQuery } from "../../../../../support/utils";

Then(
  "I see the text with a correct format on the {string} module on {string} url and {string} filter",
  (module, url, filter) => {
    let areaCode, areaName, city, editPhrase;
    cy.getFirstLocation(url, filter)
      .then((firstLocation) => {
        areaCode = firstLocation.areaCode;
        areaName = firstLocation.areaName;
        city = firstLocation.city;
        editPhrase = areaCode + " - " + areaName + " (" + city + ")";
      })
      .then(() => {
        cy.get(editAllFilterSelectedText).should("have.text", editPhrase);
      });
  }
);

Then(
  "I see the text with a correct format on the {string} module on {string} url and {string} filter {string} button",
  (module, url, filter, button) => {
    let areaCode, areaName, city, editPhrase;
    cy.getFirstLocation(url, filter)
      .then((firstLocation) => {
        areaCode = firstLocation.areaCode;
        areaName = firstLocation.areaName;
        city = firstLocation.city;
        editPhrase =
          areaCode + " - " + areaName + " (" + city + ")" + " | " + button;
      })
      .then(() => {
        cy.get(editAllFilterSelectedText).should("have.text", editPhrase);
      });
  }
);

Then(
  "I see the text with a correct format on the {string} module on {string} url and {string} filter {string} button price {string} button time",
  (module, url, filter, buttonPrice, buttonTime) => {
    let areaCode, areaName, city, editPhrase;
    cy.getFirstLocation(url, filter)
      .then((firstLocation) => {
        areaCode = firstLocation.areaCode;
        areaName = firstLocation.areaName;
        city = firstLocation.city;
        editPhrase =
          areaCode +
          " - " +
          areaName +
          " (" +
          city +
          ") | " +
          buttonPrice +
          " | " +
          buttonTime;
      })
      .then(() => {
        cy.get(editAllFilterSelectedText).should("have.text", editPhrase);
      });
  }
);

When("I click on the Edit button", () => {
  cy.get(editEditButton).click();
});

When("I delete the previous location", () => {
  cy.get(editLocationInput).clear();
});

When(
  "I type {string} filters on the Edit location textbox on {string} url",
  (filter2, url) => {
    cy.intercept("POST", `${Cypress.config("baseUrl")}/graphql`, (req) => {
      aliasQuery(req, "Area");
    });
    cy.get(editLocationInput).type(filter2);
    cy.wait("@gqlAreaQuery");
  }
);

When(
  "I click on the first field of the Edit location dropdown menu on {string} url",
  (url) => {
    cy.get(editFirstLocation).click();
  }
);

When(
  "I click on the Apply button when only Price category page is present on {string} url",
  (url) => {
    cy.intercept("POST", `${Cypress.config(url)}/graphql`, (req) => {
      aliasQuery(req, "ActivePlaces");
    });
    cy.get(editApplyButton).click();
    cy.wait("@gqlActivePlacesQuery");
  }
);

When(
  "I click on the Apply button when Time category is landed on {string} url",
  (url) => {
    cy.intercept("POST", `${Cypress.config(url)}/graphql`, (req) => {
      aliasQuery(req, "ActivePlaces");
    });
    cy.get(editApplyButton).click();
    cy.wait("@gqlActivePlacesQuery");
  }
);

When(
  "I click on the Apply button when Insights page is landed on {string} url",
  (url) => {
    cy.intercept("POST", `${Cypress.config(url)}/graphql`, (req) => {
      aliasQuery(req, "ActivePlaces");
      aliasQuery(req, "KpiSection");
    });
    cy.get(editApplyButton).click();
    cy.wait("@gqlActivePlacesQuery");
    cy.wait("@gqlKpiSectionQuery");
  }
);

When("I click on the price category dropdown menu", (button2) => {
  cy.get(editPriceCategoryDropdownMenu).click();
});

When(
  "I select {string} button on the price category dropdown menu",
  (button2) => {
    cy.get(mapForPriceCategoryDropdownMenu[button2]).click();
  }
);

When("I click on the business hours dropdown menu", () => {
  cy.get(editBusinessHoursDropdownMenu).click();
});

When(
  "I select {string} button on the business hours dropdown menu",
  (buttonTime) => {
    cy.get(mapForBusinessHoursDropdownMenu[buttonTime]).click();
  }
);
