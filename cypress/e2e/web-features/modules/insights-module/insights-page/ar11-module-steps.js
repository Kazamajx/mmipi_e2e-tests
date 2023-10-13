import { Then } from "@badeball/cypress-cucumber-preprocessor";

import { insightsAreaTrendingAccordionButton } from "../../../../common/web-variables";

Then("I see the {string} accordion expanded in the Area Trending", () => {
  cy.get(insightsAreaTrendingAccordionButton)
    .should("not.have.class", "collapsed")
    .and("have.attr", "aria-expanded", "true");
});
