import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

import {
  otherDistrictStartOverButton,
  priceCategoryContainer,
  timeCategoryContainer,
  insightsContainer,
  otherDistrictShareButton,
} from "../../../../common/web-variables";

When("I click on the Start Over button", () => {
  cy.get(otherDistrictStartOverButton).click({ force: true });
});

Then(
  "I don't see Price category module on the MMI Public Insights website",
  () => {
    cy.get(priceCategoryContainer).should("not.exist");
  }
);

Then(
  "I don't see Time category module on the MMI Public Insights website",
  () => {
    cy.get(timeCategoryContainer).should("not.exist");
  }
);

Then("I don't see Insight module on the MMI Public Insights website", () => {
  cy.get(insightsContainer).should("not.exist");
});

When("I click on the Share button", () => {
  cy.get(otherDistrictShareButton).click({ force: true });
  cy.wait(10000);
});
