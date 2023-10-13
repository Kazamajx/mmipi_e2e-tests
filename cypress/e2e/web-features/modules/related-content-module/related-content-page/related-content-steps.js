import { When } from "@badeball/cypress-cucumber-preprocessor";

import { mapForRelatedContentButtons } from "../../../../common/web-variables";

When(
  "I click on the {string} button on the Related content",
  (buttonRelatedContent) => {
    cy.get(mapForRelatedContentButtons[buttonRelatedContent]).click({
      force: true,
    });
  }
);
