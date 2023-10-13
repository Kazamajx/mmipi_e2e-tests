import { Then } from "@badeball/cypress-cucumber-preprocessor";

import {
  insightsContainer,
  timeOpeningHoursCard,
  noDataContainer,
} from "../../../../common/web-variables";

Then(
  "I see Insights module and {string} url choosing {string} filter {string} price and {string} time",
  (url, filter, buttonPrice, buttonTime) => {
    cy.isNoDataInsightModule(url, filter, buttonPrice, buttonTime).then(
      (isNoData) => {
        if (!isNoData) {
          cy.get(insightsContainer).should("be.visible");
        } else {
          cy.get(noDataContainer).should("be.visible");
        }
      }
    );
  }
);

Then("I see the correct KPIs on the Time category module", () => {
  cy.get(timeOpeningHoursCard).should("be.visible");
});
