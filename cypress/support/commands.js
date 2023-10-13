// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import * as web from "../e2e/common/web-variables";
import * as gqlQueries from "../e2e/common/graphql-queries";

// --------------- ASSERT DATA ---------------
Cypress.Commands.add(
  "assertDataOnTheModule",
  (module, url, filter, buttonPrice, buttonTime) => {
    switch (module) {
      case "Price category":
        cy.assertDataPriceCategory(url, filter);
        break;
      case "Active Food & Drink places":
        cy.assertDataActiveFoodDrinkPlaces(url, filter);
        break;
      case "Insights":
        cy.assertDataInsights(url, filter, buttonPrice, buttonTime);
        break;
      case "Top 20% places revenue":
        cy.assertDataTop20PlacesRevenue(url, filter, buttonPrice, buttonTime);
        break;
      case "Area trending":
        cy.assertDataAreaTrending(url, filter, buttonPrice, buttonTime);
        break;
      case "Position in the city":
        cy.assertDataPositionInTheCity(url, filter, buttonPrice, buttonTime);
        break;
      case "Weekly spend":
        cy.assertDataWeeklySpend(url, filter, buttonPrice, buttonTime);
        break;
      default:
        cy.log("This module doesn't exist.");
    }
  }
);

Cypress.Commands.add("assertDataPriceCategory", (url, filter) => {
  let insightsPhraseText;
  cy.getFirstLocation(url, filter)
    .then((firstLocation) => {
      let { areaCode } = firstLocation;
      let { areaName } = firstLocation;
      let { city } = firstLocation;
      let insightsPhrase =
        " Showing you the insights for " +
        areaCode +
        " - " +
        areaName +
        " (" +
        city +
        "). ";
      insightsPhraseText = insightsPhrase;
    })
    .then(() => {
      cy.get(web.priceInsightsText)
        .should("be.visible")
        .and("have.text", insightsPhraseText);
    });
});

Cypress.Commands.add("assertDataActiveFoodDrinkPlaces", (url, filter) => {
  let overallActivePlaces,
    concentrationName,
    city,
    avgPlaces,
    priceConcentrationAvgPlacesPhrase;
  cy.getTotalActivePlaces(url, filter)
    .then((overallActivePlacesBE) => {
      overallActivePlaces = overallActivePlacesBE;
    })
    .then(() => {
      cy.getConcentrationName(url, filter).then((concentrationNameBE) => {
        concentrationName = web.mapForConcentrationStrings[concentrationNameBE];
      });
    })
    .then(() => {
      cy.getFirstLocation(url, filter).then((firstLocation) => {
        city = firstLocation.city;
      });
    })
    .then(() => {
      cy.getAvgPlaces(url, filter).then((avgPlacesBE) => {
        avgPlaces = avgPlacesBE;
      });
    })
    .then(() => {
      priceConcentrationAvgPlacesPhrase =
        "This is a " +
        concentrationName +
        " concentration.The average places in " +
        city +
        " is " +
        avgPlaces +
        ".";
    })
    .then(() => {
      cy.wait(5000)
        .get(web.priceActivePlacesText)
        .should("be.visible")
        .and("have.text", overallActivePlaces);
      cy.get(web.priceConcentrationAvgPlacesText)
        .should("be.visible")
        .and("have.text", priceConcentrationAvgPlacesPhrase);
    });
});

Cypress.Commands.add(
  "assertDataInsights",
  (url, filter, buttonPrice, buttonTime) => {
    let localInsightsPhraseText;
    cy.getFirstLocation(url, filter)
      .then((firstLocation) => {
        let { areaCode } = firstLocation;
        let { areaName } = firstLocation;
        localInsightsPhraseText =
          "Below are the local insights for " +
          areaCode +
          " - " +
          areaName +
          " , " +
          buttonPrice +
          ", " +
          buttonTime +
          ". ";
      })
      .then(() => {
        cy.get(web.insightsSubtitleText).contains(localInsightsPhraseText);
      });
  }
);

Cypress.Commands.add(
  "assertDataPositionInTheCity",
  (url, filter, buttonPrice, buttonTime) => {
    cy.getAreaRankByAvgBillInformations(
      url,
      filter,
      buttonPrice,
      buttonTime
    ).then((areaRankByAvgBillInformations) => {
      let { areaRank } = areaRankByAvgBillInformations.areaRankByAvgBill;
      let { areasCount } = areaRankByAvgBillInformations.areaRankByAvgBill;
      cy.get(web.insightsAverageBillAreaRankText)
        .wait(5000)
        .should("have.text", areaRank);
      cy.get(web.insightsAverageBillAreCountText)
        .wait(5000)
        .should("have.text", "of " + areasCount);
    });
  }
);

Cypress.Commands.add(
  "assertDataTop20PlacesRevenue",
  (url, filter, buttonPrice, buttonTime) => {
    cy.getTop20ShareInformations(url, filter, buttonPrice, buttonTime).then(
      (top20ShareInformations) => {
        let { value } = top20ShareInformations.top20PShare;
        if (value != 0) {
          let percentage = (value * 100).toFixed(0);
          cy.get(web.insightsTop20PercentageText)
            .wait(5000)
            .should("have.text", percentage + "%");
        }
      }
    );
  }
);

Cypress.Commands.add(
  "assertDataAreaTrending",
  (url, filter, buttonPrice, buttonTime) => {
    let areaGrowthYoyPercentage,
      areaTrending,
      city,
      cityGrowth,
      maxAreaGrowthName,
      maxAreaGrowthValue,
      insightAreaGrowthPhrase;
    cy.getAreaGrowthInformations(url, filter, buttonPrice, buttonTime)
      .then((areaGrowthInformations) => {
        let { areaGrowthYoy } = areaGrowthInformations.areaGrowth;
        areaGrowthYoyPercentage = areaGrowthYoy * 100;
        if (areaGrowthYoyPercentage <= 10) {
          areaGrowthYoyPercentage = areaGrowthYoyPercentage.toFixed(1);
        } else {
          areaGrowthYoyPercentage = areaGrowthYoyPercentage.toFixed(0);
        }
        if (areaGrowthYoy >= 0) {
          areaTrending = "growth";
        } else {
          areaTrending = "declining";
        }
        cityGrowth = (
          areaGrowthInformations.areaGrowth.cityGrowth * 100
        ).toFixed(1);
        if (cityGrowth.split(".")[1] == "0") {
          cityGrowth = cityGrowth.split(".")[0];
        }
        maxAreaGrowthName = areaGrowthInformations.areaGrowth.maxAreaGrowthName;
        maxAreaGrowthValue = (
          areaGrowthInformations.areaGrowth.maxAreaGrowthValue * 100
        ).toFixed(1);
      })
      .then(() => {
        cy.getFirstLocation(url, filter).then((firstLocation) => {
          city = firstLocation.city;
        });
      })
      .then(() => {
        if (maxAreaGrowthValue == "0.0") {
          insightAreaGrowthPhrase =
            "is the last years' " +
            areaTrending +
            " in this micro-market. Growth of F&D in all of " +
            city +
            " is " +
            cityGrowth +
            "%.";
        } else {
          insightAreaGrowthPhrase =
            "is the last years' " +
            areaTrending +
            " in this micro-market. Growth of F&D in all of " +
            city +
            " is " +
            cityGrowth +
            "%. Best growing area is " +
            maxAreaGrowthName +
            " with +" +
            maxAreaGrowthValue +
            "%.";
        }
      })
      .then(() => {
        cy.get(web.insightsAreaTrendingPercentageText)
          .wait(5000)
          .should("be.visible")
          .and("have.text", areaGrowthYoyPercentage + "%");
        cy.get(web.insightsAreaTrendingTrendText)
          .wait(5000)
          .should("be.visible")
          .and("have.text", insightAreaGrowthPhrase);
      });
  }
);

Cypress.Commands.add(
  "assertDataWeeklySpend",
  (url, filter, buttonPrice, buttonTime) => {
    let maxValue, maxIndex, day, percentage;
    cy.getWeeklySpendInformations(url, filter, buttonPrice, buttonTime)
      .then((weeklySpendInformations) => {
        let { values } = weeklySpendInformations.weeklySpend;
        maxValue = Math.max(...values);
        percentage = (maxValue * 100).toFixed(0);
        maxIndex = values.indexOf(maxValue);
        day = web.days[maxIndex];
      })
      .then(() => {
        cy.get(web.insightsWeeklySpendPercentageText)
          .should("be.visible")
          .wait(5000)
          .should("have.text", percentage + "%");
        cy.get(web.insightsWeeklySpendDayText)
          .should("be.visible")
          .and("have.text", day);
      });
  }
);

Cypress.Commands.add("assertPriceContainer", (activePlaceValue) => {
  if (activePlaceValue == 0) {
    cy.get(web.noDataContainer).should("be.visible");
  } else {
    cy.get(web.timeCategoryContainer).should("be.visible");
  }
});

// ------ GRAPHQL REQUESTS ------

Cypress.Commands.add("getCurrency", (url) => {
  cy.getTenantInformations(url).then((tenantInformations) => {
    return tenantInformations.currency;
  });
});

Cypress.Commands.add("getLanguage", (url) => {
  cy.getTenantInformations(url).then((tenantInformations) => {
    return tenantInformations.language;
  });
});

Cypress.Commands.add("getCountryCode", (url) => {
  cy.getTenantInformations(url).then((tenantInformations) => {
    return tenantInformations.countryCode;
  });
});

Cypress.Commands.add("getTenantInformations", (url) => {
  const variables = {};
  cy.getTenant(url, variables).then((response) => {
    return response.body.data.tenant;
  });
});

Cypress.Commands.add("getTenant", (url, variables) => {
  return cy.graphqlRequest(url, gqlQueries.tenantQuery, variables);
});

Cypress.Commands.add("getAvgPlaces", (url, filter) => {
  cy.getActivePlacesInformations(url, filter).then(
    (activePlacesInformations) => {
      return activePlacesInformations.activePlaces.avgPlaces;
    }
  );
});

Cypress.Commands.add("getConcentrationName", (url, filter) => {
  cy.getActivePlacesInformations(url, filter).then(
    (activePlacesInformations) => {
      return activePlacesInformations.activePlaces.concetrationName;
    }
  );
});

Cypress.Commands.add("getTotalActivePlaces", (url, filter) => {
  cy.getActivePlacesInformations(url, filter).then(
    (activePlacesInformations) => {
      return activePlacesInformations.activePlaces.overall;
    }
  );
});

Cypress.Commands.add("getActivePlacesInformations", (url, filter) => {
  let areaCode, countryCode;
  cy.getFirstLocation(url, filter)
    .then((firstLocation) => {
      areaCode = firstLocation.areaCode;
    })
    .then(() => {
      cy.getCountryCode(url).then((countryCodeBE) => {
        countryCode = countryCodeBE;
      });
    })
    .then(() => {
      const variables = {
        areaCode: areaCode,
        countryCode: countryCode,
      };

      cy.getActivePlaces(url, variables).then((response) => {
        return response.body.data;
      });
    });
});

Cypress.Commands.add("getActivePlaces", (url, variables) => {
  return cy.graphqlRequest(url, gqlQueries.activePlacesQuery, variables);
});

Cypress.Commands.add(
  "getTop20ShareInformations",
  (url, filter, priceCategoryFilter, timeCategoryFilter) => {
    let priceCategory = web.mapForGraphqlPriceCategory[priceCategoryFilter];
    let timeCategory = web.mapForGrapqlTimeCategory[timeCategoryFilter];
    let areaCode;
    cy.getFirstLocation(url, filter)
      .then((firstLocation) => {
        areaCode = firstLocation.areaCode;
      })
      .then(() => {
        const variables = {
          areaCode: areaCode,
          priceCategory: priceCategory,
          timingCategory: timeCategory,
        };
        cy.getTop20Share(url, variables).then((response) => {
          return response.body.data;
        });
      });
  }
);

Cypress.Commands.add("getTop20Share", (url, variables) => {
  return cy.graphqlRequest(url, gqlQueries.top20PShareQuery, variables);
});

Cypress.Commands.add(
  "getAreaGrowthInformations",
  (url, filter, priceCategoryFilter, timeCategoryFilter) => {
    let priceCategory = web.mapForGraphqlPriceCategory[priceCategoryFilter];
    let timeCategory = web.mapForGrapqlTimeCategory[timeCategoryFilter];
    let areaCode;
    cy.getFirstLocation(url, filter)
      .then((firstLocation) => {
        areaCode = firstLocation.areaCode;
      })
      .then(() => {
        const variables = {
          areaCode: areaCode,
          priceCategory: priceCategory,
          timingCategory: timeCategory,
        };
        cy.getAreaGrowth(url, variables).then((response) => {
          return response.body.data;
        });
      });
  }
);

Cypress.Commands.add("getAreaGrowth", (url, variables) => {
  return cy.graphqlRequest(url, gqlQueries.cityGrowthQuery, variables);
});

Cypress.Commands.add(
  "getAreaRankByAvgBillInformations",
  (url, filter, priceCategoryFilter, timeCategoryFilter) => {
    let priceCategory = web.mapForGraphqlPriceCategory[priceCategoryFilter];
    let timeCategory = web.mapForGrapqlTimeCategory[timeCategoryFilter];
    let areaCode;
    cy.getFirstLocation(url, filter)
      .then((firstLocation) => {
        areaCode = firstLocation.areaCode;
      })
      .then(() => {
        const variables = {
          areaCode: areaCode,
          priceCategory: priceCategory,
          timingCategory: timeCategory,
        };
        cy.getAreaRankByAvgBill(url, variables).then((response) => {
          return response.body.data;
        });
      });
  }
);

Cypress.Commands.add("getAreaRankByAvgBill", (url, variables) => {
  return cy.graphqlRequest(url, gqlQueries.areaRankByAvgBillQuery, variables);
});

Cypress.Commands.add(
  "getWeeklySpendInformations",
  (url, filter, priceCategoryFilter, timeCategoryFilter) => {
    let priceCategory = web.mapForGraphqlPriceCategory[priceCategoryFilter];
    let timeCategory = web.mapForGrapqlTimeCategory[timeCategoryFilter];
    let areaCode;
    cy.getFirstLocation(url, filter)
      .then((firstLocation) => {
        areaCode = firstLocation.areaCode;
      })
      .then(() => {
        const variables = {
          areaCode: areaCode,
          priceCategory: priceCategory,
          timingCategory: timeCategory,
        };
        cy.getWeeklySpend(url, variables).then((response) => {
          return response.body.data;
        });
      });
  }
);

Cypress.Commands.add("getWeeklySpend", (url, variables) => {
  return cy.graphqlRequest(url, gqlQueries.weeklySpendQuery, variables);
});

Cypress.Commands.add("getKpiSectionInformation", (url, variables) => {
  cy.getKpiSection(url, variables).then((response) => {
    return response.body.data;
  });
});

Cypress.Commands.add("getKpiSection", (url, variables) => {
  return cy.graphqlRequest(url, gqlQueries.kpiSectionQuery, variables);
});

Cypress.Commands.add(
  "isNoDataInsightModule",
  (url, filter, buttonPrice, buttonTime) => {
    let areaCode;
    cy.getFirstLocation(url, filter)
      .then((firstLocation) => {
        areaCode = firstLocation.areaCode;
      })
      .then(() => {
        const variables = {
          areaCode: areaCode,
          priceCategory: web.mapForGraphqlPriceCategory[buttonPrice],
          timingCategory: web.mapForKpisTr[buttonTime].name,
        };
        cy.getKpiSectionInformation(url, variables).then(
          (kpiSectionInformation) => {
            return (
              kpiSectionInformation.areaGrowth == null &&
              kpiSectionInformation.areaRankByAvgBill == null &&
              kpiSectionInformation.avgBill == null &&
              kpiSectionInformation.hourlySalesVolume == null &&
              kpiSectionInformation.monthlySos == null &&
              kpiSectionInformation.monthlySpendVolume == null &&
              kpiSectionInformation.noPlaces == null &&
              kpiSectionInformation.top20PShare == null &&
              kpiSectionInformation.weeklySpend == null
            );
          }
        );
      });
  }
);

Cypress.Commands.add("getFirstLocation", (url, filter) => {
  cy.getAreaInformations(url, filter).then((areaInformations) => {
    return areaInformations.area[0];
  });
});

Cypress.Commands.add("getAreaInformations", (url, filter) => {
  const variables = {
    countryCode: "GBR",
    filter: filter,
  };
  cy.getArea(url, variables).then((response) => {
    return response.body.data;
  });
});

Cypress.Commands.add("getArea", (url, variables) => {
  return cy.graphqlRequest(url, gqlQueries.areaQuery, variables);
});

Cypress.Commands.add("graphqlRequest", (url, query, variables) => {
  let xtenant = String(url).replace("/", "");
  return cy.request({
    method: "POST",
    url: `${Cypress.config("baseUrl")}/graphql`,
    headers: {
      "x-tenant": xtenant,
    },
    body: {
      query,
      variables,
    },
  });
});
