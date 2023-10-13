import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

import {
  feedbackSubmitButton,
  feedbackFeedbackTextbox,
} from "../../../../common/web-variables";

import { aliasQuery } from "../../../../../support/utils";

Then(
  "I see the Submit button disabled as default on the Feedback module",
  () => {
    cy.get(feedbackSubmitButton).should("have.class", "disabled");
  }
);

When("I type {string} text on the Feedback module textbox", (text) => {
  cy.get(feedbackFeedbackTextbox).type(text);
});

Then("I see Submit button enabled as default on the Feedback module", () => {
  cy.get(feedbackSubmitButton).should("not.have.class", "disabled");
});

Then(
  "I click on the Submit button on the {string} url and the feedback is sent",
  (url) => {
    cy.intercept("POST", `${Cypress.config("baseUrl")}/graphql`, (req) => {
      aliasQuery(req, "AddFeedback");
    });
    cy.get(feedbackSubmitButton).click({ force: true }).wait(60000);
    cy.wait("@gqlAddFeedbackQuery");
  }
);

Then("I see Submit button disabled as default on the Feedback module", () => {
  cy.get(feedbackSubmitButton)
    .should("be.visible")
    .and("have.class", "disabled");
});
