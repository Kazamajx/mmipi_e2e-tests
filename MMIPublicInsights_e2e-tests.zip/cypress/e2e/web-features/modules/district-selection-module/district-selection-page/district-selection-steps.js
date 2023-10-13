import { Then } from "@badeball/cypress-cucumber-preprocessor";

import {
  priceCategoryContainer,
  areaLocationList,
} from "../../../../common/web-variables";

Then("I see the area location list", () => {
  cy.get(areaLocationList).should("be.visible");
});

Then("All fields in the list contain {string} filters", (characters) => {
  cy.get(areaLocationList + " > li").each(($el, index, $list) => {
    expect($el.text().toLowerCase()).to.be.contains(characters);
  });
});

Then(
  "I see the information about a location that contains {string} filters",
  (filters) => {
    cy.get(priceCategoryContainer).should("be.visible");
  }
);
