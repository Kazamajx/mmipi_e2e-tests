import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor/";

import {
  acceptCookiesButton,
  areaLocationInput,
  firstAreaLocation,
  mapForPriceCategoryButtons,
  mapForKpis,
  mapForTimeCategoryButtons,
  landingModuleContainer,
  districtSelectionContainer,
  mapForPageContainers,
  mapForSegments,
} from "./web-variables";

import { aliasQuery } from "../../support/utils";

Given("I open the {string} url", (url) => {
  cy.window()
    .then((win) => {
      cy.clearLocalStorage();
      win.sessionStorage.clear();
    })
    .then(() => {
      cy.visit(url);
    });
});

When("I accept the one trust cookies", () => {
  cy.get(acceptCookiesButton).click();
});

Then("I see {string} as title", (title) => {
  cy.title().should("eq", title);
});

When(
  "I type {string} filters on the location textbox on {string} url",
  (characters, url) => {
    cy.intercept("POST", `${Cypress.config("baseUrl")}/graphql`, (req) => {
      aliasQuery(req, "Area");
    });
    cy.get(areaLocationInput).type(characters);
    cy.wait("@gqlAreaQuery");
  }
);

When(
  "I click on the first field of the location dropdown menu on {string} url and {string} filter",
  (url, filter) => {
    cy.getActivePlacesInformations(url, filter).then(
      (activePlacesInformation) => {
        if (
          activePlacesInformation.overall == 0 &&
          !activePlacesInformation.activePlacesOnly &&
          activePlacesInformation.avgPlaces == 0 &&
          activePlacesInformation.concentrationName == null
        ) {
          cy.get(firstAreaLocation).click();
        } else {
          cy.intercept(
            "POST",
            `${Cypress.config("baseUrl")}/graphql`,
            (req) => {
              aliasQuery(req, "Segment");
              aliasQuery(req, "ActivePlaces");
            }
          );
          cy.get(firstAreaLocation).click();
          cy.wait("@gqlSegmentQuery");
          cy.wait("@gqlActivePlacesQuery");
        }
      }
    );
  }
);

When(
  "I click on the {string} button on the Price category selection on {string} url and {string} filter",
  (button, url, filter) => {
    cy.getActivePlacesInformations(url, filter).then(
      (activePlacesInformations) => {
        const segment = mapForSegments[button];
        const activePlace =
          activePlacesInformations.activePlaces.activePlaces.filter(
            (c) => c.category == segment.translationKey
          );
        if (activePlace[0].value != 0) {
          cy.intercept(
            "POST",
            `${Cypress.config("baseUrl")}/graphql`,
            (req) => {
              aliasQuery(req, "ActivePlaces");
            }
          );
          cy.get(mapForPriceCategoryButtons[button]).click();
          cy.wait("@gqlActivePlacesQuery");
        } else {
          cy.get(mapForPriceCategoryButtons[button]).click();
        }
      }
    );
  }
);

Then("I click on the {string} button on the {string} kpi", (button, kpi) => {
  cy.get(mapForKpis[kpi][button]).click({ force: true });
});

Then(
  "I see the correct {string} clicked on the {string} kpi",
  (button, kpi) => {
    cy.get(mapForKpis[kpi][button]).should("have.class", "ng-dirty");
  }
);

Then("I see {string} KPI on the MMI Public Insights website", (kpi) => {
  cy.get(mapForKpis[kpi]["Container"]).should("be.visible");
});

When("I click on the {string} kpi accordion button", (kpi) => {
  cy.get(mapForKpis[kpi]["Accordion button"]).click({ force: true });
});

Then("I see the {string} kpi accordion expanded", (kpi) => {
  cy.get(mapForKpis[kpi]["Accordion button"])
    .should("not.have.class", "collapsed")
    .and("have.attr", "aria-expanded", "true");
});

When(
  "I click on the {string} button on the Time category selection on {string} url and {string} filter and {string} price",
  (button, url, filter, price) => {
    cy.isNoDataInsightModule(url, filter, price, button).then((isNoData) => {
      if (!isNoData) {
        cy.intercept("POST", `${Cypress.config("baseUrl")}/graphql`, (req) => {
          aliasQuery(req, "KpiSection");
        });
        cy.get(mapForTimeCategoryButtons[button]).click({ force: true });
        cy.wait("@gqlKpiSectionQuery");
      } else {
        cy.get(mapForTimeCategoryButtons[button]).click({ force: true });
      }
    });
  }
);

Then("I see Landing module on the MMI Public Insights website", () => {
  cy.get(landingModuleContainer).should("be.visible");
});

Then(
  "I see District selection module on the MMI Public Insights website",
  () => {
    cy.get(districtSelectionContainer).should("be.visible");
  }
);

Then("I see the correct texts on the {string} module", (module) => {
  cy.assertTextOntheModule(module);
});

Then("I see the correct texts in bold on the {string} module", (module) => {
  cy.assertBoldTextOntheModule(module);
});

Then("I see {string} module on the MMI Public Insights website", (module) => {
  cy.get(mapForPageContainers[module]).should("be.visible");
});

Then(
  "I don t see {string} module on the MMI Public Insights website",
  (module) => {
    cy.get(mapForPageContainers[module]).should("not.exist");
  }
);

Then(
  "I see the correct data on the {string} module on {string} url and {string} filter",
  (module, url, filter) => {
    cy.assertDataOnTheModule(module, url, filter);
  }
);

Then(
  "I see the correct data on the {string} module and {string} url choosing {string} filter {string} price and {string} time category",
  (module, url, filter, buttonPrice, buttonTime) => {
    cy.assertDataOnTheModule(module, url, filter, buttonPrice, buttonTime);
  }
);
