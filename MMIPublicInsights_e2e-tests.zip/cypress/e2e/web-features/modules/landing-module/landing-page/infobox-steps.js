import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

import { mapAccordionsInfobox } from "../../../../common/web-variables";

When("I tap on the {string} accordion in the infobox", (accordion) => {
  cy.get(mapAccordionsInfobox[accordion]["Button"]).click({ force: true });
});

Then("I see the {string} accordion expanded in the infobox", (accordion) => {
  cy.get(mapAccordionsInfobox[accordion]["Button"])
    .should("not.have.class", "collapsed")
    .and("have.attr", "aria-expanded", "true");
});

Then("I see the correct texts under the {string} accordion", (accordion) => {
  cy.assertTextsInfoboxAccordion(accordion);
});
