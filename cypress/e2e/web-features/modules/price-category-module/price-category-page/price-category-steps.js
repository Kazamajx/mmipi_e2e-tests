import { Then } from "@badeball/cypress-cucumber-preprocessor";

import {
  priceActivePlacesCard,
  priceFoodAndDrinkCard,
  mapForSegments,
} from "../../../../common/web-variables";

Then("I see the correct KPIs on the Price category module", () => {
  cy.get(priceActivePlacesCard).should("be.visible");
  cy.get(priceFoodAndDrinkCard).should("be.visible");
});

Then(
  "I see Time category module on {string} and {string} filter and {string} button",
  (url, filter, button) => {
    cy.getActivePlacesInformations(url, filter).then(
      (activePlacesInformations) => {
        const segment = mapForSegments[button];
        const activePlace =
          activePlacesInformations.activePlaces.activePlaces.filter(
            (c) => c.category == segment.translationKey
          );
        cy.assertPriceContainer(activePlace[0].value);
      }
    );
  }
);
