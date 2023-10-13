export const mapForSegments = {
  "Quick service": {
    name: "MASS & FASTFOOD",
    translationKey: "SELECTION-PAGES.PRICE_CATEGORY.MASS_&_FASTFOOD",
  },
  "Fast casual": {
    name: "MIDDLE CLASS",
    translationKey: "SELECTION-PAGES.PRICE_CATEGORY.MID_CLASS",
  },
  "Casual dining": {
    name: "FINE DINING",
    translationKey: "SELECTION-PAGES.PRICE_CATEGORY.FINE_DINING",
  },
  "Fine dining": {
    name: "LUXURY",
    translationKey: "SELECTION-PAGES.PRICE_CATEGORY.LUXURY",
  },
};

export const mapForKpisTr = {
  "24/7": {
    name: "OPEN 24-7",
    translationKey: "SELECTION-PAGES.TIME_CATEGORY.OPEN_24-7",
  },
  "Breakfast, lunch and dinner": {
    name: "ALL DAY",
    translationKey: "SELECTION-PAGES.TIME_CATEGORY.ALL_DAY",
  },
  "Breakfast and lunch": {
    name: "BREAKFAST & LUNCH",
    translationKey: "SELECTION-PAGES.TIME_CATEGORY.BREAKFAST_&_LUNCH",
  },
  "Lunch and dinner": {
    name: "LUNCH & DINNER",
    translationKey: "SELECTION-PAGES.TIME_CATEGORY.DINNER",
  },
  "One meal only": {
    name: "LUNCH-DINNER-NIGHTLIFE",
    translationKey: "SELECTION-PAGES.TIME_CATEGORY.NIGHTLIFE",
  },
};

export const mapForGraphqlPriceCategory = {
  "Quick service": "MASS & FASTFOOD",
  "Fast casual": "MIDDLE CLASS",
  "Casual dining": "Fine dining",
  "Fine dining": "LUXURY",
};

export const mapForGrapqlTimeCategoryTr = {
  "24/7": "OPEN 24/7",
  "Breakfast, lunch and dinner": "ALL DAY",
  "Breakfast and lunch": "BREAKFAST & LUNCH",
  "Lunch and dinner": "LUNCH & DINNER",
  "One meal only": "LUNCH-DINNER-NIGHTLIFE",
};

// Cookies
export const acceptCookiesButton = "#onetrust-accept-btn-handler";

// Multi-country selector
export const countrySelectorComponent =
  '[data-cy="country-selector-component"]';
export const countrySelectorButton = '[data-cy="country-selector-toggle"]';
export const countrySelectorDropdownMenu =
  '[data-cy="country-dropdown-container"]';
export const countryUkSelector = '[data-cy="country-UK&I-selector"]';
export const countryItaSelector = '[data-cy="country-ITA-selector"]';

export const mapForSelector = {
  Italy: {
    country: " ITA ",
    selector: countryItaSelector,
  },
  "United Kingdom": {
    country: " UK&I ",
    selector: countryUkSelector,
  },
};

// Landing module
export const landingModuleContainer = '[data-cy="welcome-module-section"]';
export const mastercardText = '[data-cy="welcome-mastercard-text-desktop"]';
export const mastercardImage = '[data-cy="welcome-mastercard-icon-desktop"]';
export const foodText = '[data-cy="welcome-food-text"]';
export const drinkServiceText = '[data-cy="welcome-drinkservice-text"]';
export const ukIrelandText = '[data-cy="welcome-ukireland-text"]';
export const hospitalityText = '[data-cy="welcome-hospitalityindustry-text"]';
export const neighbourhoodText = '[data-cy="welcome-neithbourhood-text"]';
export const mastercardAnalyticsText =
  '[data-cy="welcome-mastercardanalytics-text"]';
export const ukImage = '[data-cy="welcome-ukimage-container"]';

// Edit banner
export const editContainer = '[data-cy="edit-banner-container"]';
export const editEditButton = '[data-cy="edit-menu-button"]';
export const editAllFilterSelectedText =
  '[data-cy="edit-allfiltersselected-text"]';
export const editAreaPanel = '[data-cy="edit-area-panel"]';
export const editPricePanel = '[data-cy="edit-price-panel"]';
export const editLocationInput = '[data-cy="area_selector"]';
export const editFirstLocation = '[data-cy="area-0-text"]';
export const editApplyButton = '[data-cy="edit-apply-button"]';
export const editXButton = '[data-cy="edit-apply-button"]';
export const editPriceCategoryDropdownMenu =
  '[data-cy="edit-price-category-dropdown"]';
export const editQuickServiceFieldPriceCategoryDropdownMenu =
  '[data-cy="edit-Quick service-text"]';
export const editFastCasualFieldPriceCategoryDropdownMenu =
  '[data-cy="edit-Fast casual-text"]';
export const editCasualDiningFieldPriceCategoryDropdownMenu =
  '[data-cy="edit-Casual dining-text"]';
export const editFineDiningFieldPriceCategoryDropdownMenu =
  '[data-cy="edit-Fine dining-text"]';

export const mapForPriceCategoryDropdownMenu = {
  "Quick service": editQuickServiceFieldPriceCategoryDropdownMenu,
  "Fast casual": editFastCasualFieldPriceCategoryDropdownMenu,
  "Casual dining": editCasualDiningFieldPriceCategoryDropdownMenu,
  "Fine dining": editFineDiningFieldPriceCategoryDropdownMenu,
};

export const editBusinessHoursDropdownMenu =
  '[data-cy="edit-time-category-dropdown"]';
export const edit247FieldBusinessHoursDropdownMenu =
  '[data-cy="edit-24/7 open-text"]';
export const editAllDayFieldBusinessHoursDropdownMenu =
  '[data-cy="edit-Breakfast, lunch and dinner-text"]';
export const editBreakfastAndLunchFieldBusinessHoursDropdownMenu =
  '[data-cy="edit-Breakfast and lunch-text"]';
export const editLunchAndDinnerFieldBusinessHoursDropdownMenu =
  '[data-cy="edit-Lunch and dinner-text"]';
export const editOneMealOnlyFieldBusinessHoursDropdownMenu =
  '[data-cy="edit-One meal only-text"]';

export const mapForBusinessHoursDropdownMenu = {
  "24/7": edit247FieldBusinessHoursDropdownMenu,
  "Breakfast, lunch and dinner": editAllDayFieldBusinessHoursDropdownMenu,
  "Breakfast and lunch": editBreakfastAndLunchFieldBusinessHoursDropdownMenu,
  "Lunch and dinner": editLunchAndDinnerFieldBusinessHoursDropdownMenu,
  "One meal only": editOneMealOnlyFieldBusinessHoursDropdownMenu,
};

// Infobox
export const infoboxContainer = '[data-cy="infobox-module-section"]';
export const mastercardLogoInfobox = '[data-cy="infobox-mastercard-icon"]';
export const reportTextInfobox = '[data-cy="infobox-report-text"]';
export const mastercardDataTextInfobox =
  '[data-cy="infobox-mastercarddata-text"]';

export const firstQuestionTextAccordionInfobox =
  '[data-cy="infobox-questionfirstaccordion-text"]';
export const firstAccordionButtonInfobox =
  '[data-cy="infobox-firstquestion-button"]';
export const secondQuestionTextAccordionInfobox =
  '[data-cy="infobox-questionsecondaccordion-text"]';
export const secondAccordionButtonInfobox =
  '[data-cy="infobox-secondquestion-button"]';

export const mapAccordionsInfobox = {
  First: {
    Question: firstQuestionTextAccordionInfobox,
    Button: firstAccordionButtonInfobox,
  },
  Second: {
    Question: secondQuestionTextAccordionInfobox,
    Button: secondAccordionButtonInfobox,
  },
};

export const transactionTextInfobox =
  '[data-cy="infobox-answerfirstaccordion-text"]';
export const posTextInfobox = '[data-cy="infobox-mccategory-text"]';
export const mccTextInfobox = '[data-cy="infobox-mcc-text"]';
export const restaurantsTextInfobox = '[data-cy="infobox-restaurants-text"]';
export const barTextInfobox = '[data-cy="infobox-bar-text"]';
export const eatingPlacesTextInfobox = '[data-cy="infobox-eatingplaces-text"]';
export const caterersTextInfobox = '[data-cy="infobox-caterers-text"]';
export const businessesTextInfobox = '[data-cy="infobox-businesses-text"]';

// District selection module
export const districtSelectionContainer = '[data-cy="area-module-section"]';
export const areaQuestionText = '[data-cy="area-question-text"]';
export const areaAnswerText = '[data-cy="area-answer-text"]';
export const areaLocationLabelText = '[data-cy="area-locationlabel-text"]';
export const areaLocationInput = '[data-cy="area_selector_primary"]';
export const areaLocationList = '[data-cy="area-location-list"]';
export const firstAreaLocation = '[data-cy="area-0-text"]';

// Price category module
export const priceCategoryContainer = '[data-cy="price-module-section"]';
export const priceGreatText =
  "#price-selection > div > div.selection-section-header > h5";
export const priceInsightsText = '[data-cy="price-subtitle-text"]';

export const mapForConcentrationStrings = {
  "SELECTION-PAGES.KPI_CARD.BODY.HIGH": "high",
  "SELECTION-PAGES.KPI_CARD.BODY.LOW": "low",
  "SELECTION-PAGES.KPI_CARD.BODY.MEDIUM": "medium",
};

export const priceActivePlacesCard = '[data-cy="price-activeplaces-container"]';
export const priceActivePlacesText = '[data-cy="price-districts-text"]';
export const priceConcentrationAvgPlacesText =
  '[data-cy="price-concetrationandaverage-text"]';
export const priceActiveFoodAndDrinkPlacesText =
  "#price-selection > div > div.selection-section-content > div > div:nth-child(1) > app-kpi-card > div > section.kpi_top.pt-3 > div.row.px-3 > span.kpi-title.font-style-MCBold";
export const priceDistrictText =
  "#price-selection > div > div.selection-section-content > div > div:nth-child(1) > app-kpi-card > div > section.kpi_top.pt-3 > div.row.px-3 > span.kpi-subtitle";
export const priceActivePlacesAccordionQuestionText =
  "#ngb-panel-2-header > button > span";
export const priceActivePlacesAccordionAnswerText = "#ngb-panel-2 > div > p";
export const pricaActivePlacesInsightQuestionText =
  "#price-selection > div > div.selection-section-content > div > div:nth-child(1) > app-kpi-card > div > section.kpi_bottom > div > app-rate-insight > div > h1";
export const priceActivePlacesAccordionButton =
  '[data-cy="activePlaces-accordion"] > div > div > button';
export const priceActivePlacesInsightYesAnswerText =
  "#price-selection > div > div.selection-section-content > div > div:nth-child(1) > app-kpi-card > div > section.kpi_bottom > div > app-rate-insight > div > form > div > label.left.text.btn.btn-outline-dark";
export const priceActivePlacesInsightYesAnswerButton =
  '[data-cy="activePlaces-rate-insight-input_yes"]';
export const priceActivePlacesInsightNoAnswerText =
  "#price-selection > div > div.selection-section-content > div > div:nth-child(1) > app-kpi-card > div > section.kpi_bottom > div > app-rate-insight > div > form > div > label.right.text.btn.btn-outline-dark";
export const priceActivePlacesInsightNoAnswerButton =
  '[data-cy="activePlaces-rate-insight-input_no"]';

export const priceFoodAndDrinkCard = '[data-cy="price-foodanddrink-container"]';
export const priceFoodAndDrinkSpotsText =
  "#price-selection > div > div.selection-section-content > div > div:nth-child(2) > app-kpi-card > div > section.kpi_body > p > span.kpi-title";
export const priceFoodAndDrinkPriceText =
  "#price-selection > div > div.selection-section-content > div > div:nth-child(2) > app-kpi-card > div > section.kpi_body > p > span.kpi-subtitle.font-style-MCBold";
export const priceFoodAndDrinkAccordionQuestionText =
  "#ngb-panel-3-header > button > span";
export const priceFoodAndDrinkAccordionButton =
  '[data-cy="activePlaces1-accordion"] > div > div > button';
export const priceFoodAndDrinkRankingText =
  "#ngb-panel-3 > div > div > p:nth-child(1)";
export const priceFoodAndDrinkQuickServiceText =
  "#ngb-panel-3 > div > div > p:nth-child(2)";
export const priceFoodAndDrink20Foofball80BillText =
  "#ngb-panel-3 > div > div > p:nth-child(3)";
export const priceFoodAndDrinkFastCasualText =
  "#ngb-panel-3 > div > div > p:nth-child(4)";
export const priceFoodAndDrink80Football80BillText =
  "#ngb-panel-3 > div > div > p:nth-child(5)";
export const priceFoodAndDrinkCasualDiningText =
  "#ngb-panel-3 > div > div > p:nth-child(6)";
export const priceFoodAndDrink80Football96BillText =
  "#ngb-panel-3 > div > div > p:nth-child(7)";
export const priceFoodAndDrinkFineDiningText =
  "#ngb-panel-3 > div > div > p:nth-child(8)";
export const priceFoodAndDrink20FootBall3BillText =
  "#ngb-panel-3 > div > div > p:nth-child(9)";
export const priceFoodAndDrinkPleaseNoteText =
  "#ngb-panel-3 > div > div > small > span.font-style-MCMedium";
export const priceFoodAndDrinkBillCountText =
  "#ngb-panel-3 > div > div > small > span:nth-child(2)";
export const priceFoodAndDrinkInsightQuestionText =
  "#price-selection > div > div.selection-section-content > div > div:nth-child(2) > app-kpi-card > div > section.kpi_bottom > div > app-rate-insight > div > h1";
export const priceFoodAndDrinkInsightYesAnswerText =
  "#price-selection > div > div.selection-section-content > div > div:nth-child(2) > app-kpi-card > div > section.kpi_bottom > div > app-rate-insight > div > form > div > label.left.text.btn.btn-outline-dark";
export const priceFoodAndDrinkInsightYesAnswerButton =
  '[data-cy="activePlaces1-rate-insight-input_yes"]';
export const priceFoodAndDrinkInsightNoAnswerText =
  "#price-selection > div > div.selection-section-content > div > div:nth-child(2) > app-kpi-card > div > section.kpi_bottom > div > app-rate-insight > div > form > div > label.right.text.btn.btn-outline-dark";
export const priceFoodAndDrinkInsightNoAnswerButton =
  '[data-cy="activePlaces1-rate-insight-input_no"]';
export const priceSegmentQuestionText =
  "#price-selection > div > div.selection-section-buttons.mt-4.mb-4 > app-button-selector > section > h2:nth-child(1)";
export const priceSegmentAnswerText =
  "#price-selection > div > div.selection-section-buttons.mt-4.mb-4 > app-button-selector > section > p:nth-child(2)";

export const priceQuickServiceButton =
  '[data-cy="area-MASS & FASTFOOD-button"]';
export const priceFastCasualButton = '[data-cy="area-MIDDLE CLASS-button"]';
export const priceCasualDiningButton = '[data-cy="area-FINE DINING-button"]';
export const priceFineDiningButton = '[data-cy="area-LUXURY-button"]';

export const mapForPriceCategoryButtons = {
  "Quick service": priceQuickServiceButton,
  "Fast casual": priceFastCasualButton,
  "Casual dining": priceCasualDiningButton,
  "Fine dining": priceFineDiningButton,
};

// Time category module
export const timeCategoryContainer = '[data-cy="time-module-section"]';
export const timeOpeningHoursCard = '[data-cy="time-openinghours-card"]';
export const timeFoodAndDrinkDistrictText =
  "#time-selection > div > div.selection-section-content > div > div > app-kpi-card > div > section.kpi_body > p > span:nth-child(1)";
export const timeOpeningHoursText =
  "#time-selection > div > div.selection-section-content > div > div > app-kpi-card > div > section.kpi_body > p > span.kpi-subtitle-time.font-style-MCBold";
export const timeOpeningHoursAccordionQuestionText =
  "#ngb-panel-4-header > button > span";
export const timeOpeningHoursccordionButton =
  '[data-cy="activePlaces2-accordion"] > div > div > button';
export const timeOpeningHoursnsightQuestionText = "#active_places > div > h1";
export const timeOpeningHoursRangePaymentText =
  "#ngb-panel-4 > div > div > p:nth-child(1)";
export const timeOpeningHours247Text =
  "#ngb-panel-4 > div > div > strong:nth-child(2)";
export const timeOpeningHoursMore20Text =
  "#ngb-panel-4 > div > div > p:nth-child(3)";
export const timeOpeningHoursAllDayText =
  "#ngb-panel-4 > div > div > strong:nth-child(4)";
export const timeOpeningHoursMorningTillText =
  "#ngb-panel-4 > div > div > p:nth-child(5)";
export const timeOpeningHoursBreakfastAndLunchText =
  "#ngb-panel-4 > div > div > strong:nth-child(6)";
export const timeOpeningHours9Till5PMText =
  "#ngb-panel-4 > div > div > p:nth-child(7)";
export const timeOpeningHoursLunchAndDinnerText =
  "#ngb-panel-4 > div > div > strong:nth-child(8)";
export const timeOpeningHours1014TillText =
  "#ngb-panel-4 > div > div > p:nth-child(9)";
export const timeOpeningHoursOneMealOnlyText =
  "#ngb-panel-4 > div > div > strong:nth-child(10)";
export const timeOpeningHoursLunchDinnerNightlifeText =
  "#ngb-panel-4 > div > div > p:nth-child(11)";
export const timeOpeningHoursInsightYesAnswerText =
  "#active_places > div > form > div > label.left.text.btn.btn-outline-light";
export const timeOpeningHoursInsightYesAnswerButton =
  '[data-cy="activePlaces2-rate-insight-input_yes"]';
export const timeOpeningHoursInsightNoAnswerText =
  "#active_places > div > form > div > label.right.text.btn.btn-outline-light";
export const timeOpeningHoursInsightNoAnswerButton =
  '[data-cy="activePlaces2-rate-insight-input_no"]';
export const timeQuestionText =
  "#time-selection > div > div.selection-section-buttons.mt-4.mb-4 > app-button-selector > section > h2.title.font-style-MCBold.blackColor";

export const time247Button = '[data-cy="area-OPEN 24-7-button"]';
export const timeAllDayButton = '[data-cy="area-ALL DAY-button"]';
export const timeBreakfastAndLunchButton =
  '[data-cy="area-BREAKFAST & LUNCH-button"]';
export const timeLunchAndDinnerButton =
  '[data-cy="area-LUNCH & DINNER-button"]';
export const timeOneMealOnly = '[data-cy="area-LUNCH-DINNER-NIGHTLIFE-button"]';

export const mapForTimeCategoryButtons = {
  "24/7": time247Button,
  "Breakfast, lunch and dinner": timeAllDayButton,
  "Breakfast and lunch": timeBreakfastAndLunchButton,
  "Lunch and dinner": timeLunchAndDinnerButton,
  "One meal only": timeOneMealOnly,
};

// Insights module
export const insightsContainer = '[data-cy="insight-module-section"]';
export const insightsSubtitleText = '[data-cy="kpi-insights-subtitle"]';
export const insightsLastUpdateText = '[data-cy="kpi-insights-lastUpdate"]';
export const insightsMicroMarketText = "#kpi-section > section > div.row > h1";

// Ar7
export const insightsTop20Card = '[data-cy="insights-top_20-card"]';
export const insightsTop20PercentageText = '[data-cy="top_20-kpiValue"]';
export const insightsTop20PlacesText =
  "#kpi-section > section > div:nth-child(2) > div.row.top-kpi > div:nth-child(1) > app-kpi-card > div > section.kpi_top.pt-3 > div.card-top-below-kpi.px-3 > div > p";
export const insightsTop20RevenueText =
  "#kpi-section > section > div:nth-child(2) > div.row.top-kpi > div:nth-child(1) > app-kpi-card > div > section.kpi_top.pt-3 > div.card-top-below-kpi.px-3 > div > p > span:nth-child(1)";
export const insightsTop20TwentyText =
  "#kpi-section > section > div:nth-child(2) > div.row.top-kpi > div:nth-child(1) > app-kpi-card > div > section.kpi_top.pt-3 > div.card-top-below-kpi.px-3 > div > p > span:nth-child(2)";
export const insightsTop20InsightQuestionText = "#top_20 > div > h1";
export const insightsTop20InsightYesAnswerText =
  "#top_20 > div > form > div > label.left.text.btn.btn-outline-light";
export const insightsTop20InsightYesAnswerButton =
  '[data-cy="top_20-rate-insight-input_yes"]';
export const insightsTop20InsightNoAnswerText =
  "#top_20 > div > form > div > label.right.text.btn.btn-outline-light";
export const insightsTop20InsightNoAnswerButton =
  '[data-cy="top_20-rate-insight-input_no"]';

// Ar11
export const insightsAreaTrendingCard = '[data-cy="insights-area_growth-card"]';
export const insightsAreaTrendingPercentageText =
  '[data-cy="area_growth-kpiValue"]';
export const insightsAreaTrendingTrendText = '[data-cy="area_growth-kpiText"]';
export const insightsAreaTrendingPercentageSmallText =
  "#kpi-section > section > div:nth-child(2) > div.row.top-kpi > div:nth-child(2) > app-kpi-card > div > section.kpi_top.pt-3 > div.card-top-below-kpi.px-3 > div > p > strong:nth-child(2)";
export const insightsAreaTrendingAccordionButton =
  "#ngb-panel-30-header > button";
export const insightsAreaTrendingAccordionText =
  "#ngb-panel-9-header > .accordion-button > .header";
export const insightAreaTrendingAccordionSalesText =
  "#ngb-panel-30 > div > div > p:nth-child(1)";
export const insightAreaTrendingAccordionStagnatingText =
  "#ngb-panel-30 > div > div > p:nth-child(3)";
export const insightsAreaTrendingInsightQuestionText =
  "#area_growth > div > h1";
export const insightsAreaTrendingYesAnswerButton =
  '[data-cy="area_growth-rate-insight-input_yes"]';
export const insightsAreaTrendingNoAnswerButton =
  '[data-cy="area_growth-rate-insight-input_no"]';

export const mapTrendTextFromBEtoFE = {
  "growing above the market": "growing above market rate",
  declining: "declining",
  stagnating: "stagnating",
};

// Ar12
export const insightsAverageBillCard =
  '[data-cy="insights-rank_by_avg_bill-card"]';
export const insightsAverageBillAreaRankText =
  '[data-cy="rank_by_avg_bill-kpiValue"]';
export const insightsAverageBillAreCountText =
  '[data-cy="insights-rank_by_avg_bill-card"] > .card-container > .ps-3 > .kpi-container > .d-flex > .afterValue';
export const insightsAverageBillRankingText =
  "#kpi-section > section > div:nth-child(2) > div.row.top-kpi > div:nth-child(3) > app-kpi-card > div > section.kpi_top.pt-3 > div.card-top-below-kpi.px-3 > div > p > span:nth-child(1)";
export const insightsAverageBillAverageText =
  "#kpi-section > section > div:nth-child(2) > div.row.top-kpi > div:nth-child(3) > app-kpi-card > div > section.kpi_top.pt-3 > div.card-top-below-kpi.px-3 > div > p > span:nth-child(3)";
export const insightsAverageBillInsightQuestionText =
  "#rank_by_avg_bill > div > h1";
export const insightsAverageBillInsightYesAnswerButton =
  '[data-cy="rank_by_avg_bill-rate-insight-input_yes"]';
export const insightsAverageBillInsightNoAnswerButton =
  '[data-cy="rank_by_avg_bill-rate-insight-input_no"]';

// Gb5
export const insightsHourlySalesCard =
  '[data-cy="insights-hourly_sales_volume-card"]';
export const insightsHourlySalesAccordionButton =
  '[data-cy="hourly_sales_volume-accordion"] > div > div > button';
export const insightsHourlySalesInsightNoAnswerButton =
  '[data-cy="hourly_sales_volume-rate-insight-input_yes"]';
export const insightsHourlySalesInsightYesAnswerButton =
  '[data-cy="hourly_sales_volume-rate-insight-input_no"]';

// Gb9
export const insightsWeeklySpendCard = '[data-cy="insights-weeklySpend-card"]';
export const insightsWeeklySpendSpendText =
  "#kpi-section > section > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > app-kpi-card > div > section.kpi_body > p > div > div.col.flex-grow-3 > p > strong";
export const insightsWeeklySpendDayText = '[data-cy="weeklySpend-highestDay"]';
export const insightsWeeklySpendPercentageText =
  '[data-cy="weeklySpend-kpiValue"]';
export const insightsWeeklySpendWeeklySpendText =
  "#kpi-section > section > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > app-kpi-card > div > section.kpi_body > p > div > div.col.ml--60.d-flex.flex-column.justify-content-end.align-items-end > p > strong";
export const insightsWeeklySpendInsightQuestionText =
  "#weekly_spend > div > h1";
export const insightsWeeklySpendInsightYesAnswerButton =
  '[data-cy="weeklySpend-rate-insight-input_yes"]';
export const insightsWeeklySpendInsightNoAnswerButton =
  '[data-cy="weeklySpend-rate-insight-input_no"]';

export const days = {
  0: "Mondays",
  1: "Tuesdays",
  2: "Wednesdays",
  3: "Thursdays",
  4: "Fridays",
  5: "Saturdays",
  6: "Sundays",
};

// Ind1
export const insightsCovidLockdownCard =
  '[data-cy="insights-monthlySpendVolume-card"]';
export const insightsCovidLockdownInsightAccordionButton =
  '[data-cy="monthlySpendVolume-accordion"] > div > div > button';
export const insightsCovidLockdownInsightYesAnswerButton =
  '[data-cy="monthlySpendVolume-rate-insight-input_yes"]';
export const insightsCovidLockdownInsightNoAnswerButton =
  '[data-cy="monthlySpendVolume-rate-insight-input_no"]';

// Ind2
export const insightsInflationCostOfLivingCard =
  '[data-cy="insights-monthlySos-card"]';
export const insightsInflationCostOfLivingInsightAccordionButton =
  '[data-cy="monthlySos-accordion"] > div > div > button';
export const insightsCostOfLivingInsightYesAnswerButton =
  '[data-cy="monthlySos-rate-insight-input_yes"]';
export const insightsCostOfLivingInsightNoAnswerButton =
  '[data-cy="monthlySos-rate-insight-input_no"]';

// Ind3
export const insightsNumberOfYourCompetitorCard =
  '[data-cy="insights-competitors-card"]';
export const insightsNumberOfYourCompetitorInsightAccordionButton =
  '[data-cy="competitors-accordion"] > div > div > button';
export const insightsNumberOfYourCompetitorInsightYesAnswerButton =
  '[data-cy="competitors-rate-insight-input_yes"]';
export const insightsNumberOfYourCompetitorInsightNoAnswerButton =
  '[data-cy="competitors-rate-insight-input_no"]';

// Ind4
export const insightsAverageBillOverTimeCard =
  '[data-cy="insights-avgOT-card"]';
export const insightsAverageBillOverTimeInsightAccordionButton =
  '[data-cy="avgOT-accordion"] > div > div > button';
export const insightsAverageBillOverTimeInsightYesAnswerButton =
  '[data-cy="avgOT-rate-insight-input_yes"]';
export const insightsAverageBillOverTimeInsightNoAnswerButton =
  '[data-cy="avgOT-rate-insight-input_no"]';

// Interest other district module
export const otherDistrictContainer = '[data-cy="other-district-section"]';
export const otherDistrictQuestionText =
  "body > app-root > div > app-home-page > div:nth-child(6) > div > app-other-district > div > h6";
export const otherDistrictStartOverButton =
  '[data-cy="other-district-startOver"]';
export const otherDistrictShareButton = '[data-cy="other-district-share"]';

// Feedback module
export const feedbackContainer = '[data-cy="insight-suggestion-section"]';
export const feedbackQuestionText =
  "body > app-root > div > app-home-page > div:nth-child(7) > div > app-insights-suggestion > div.insights-suggestion-container.section-max-width > h4";
export const feedbackFeedbackTextbox = '[data-cy="insights-suggestion-input"]';
export const feedbackSubmitButton = '[data-cy="insights-suggestion-submit"]';

// Related content module
export const relatedContentContainer =
  '[data-cy="initiatives-contents-section"]';
export const relatedContentEnterpriseNationTitleText =
  "body > app-root > div > app-home-page > div.row.mx-0.initiatives > div > div > div > div:nth-child(1) > app-initiative > div > h1";
export const relatedContentEnterpriseNationMakePlanText =
  "body > app-root > div > app-home-page > div.row.mx-0.initiatives > div > div > div > div:nth-child(1) > app-initiative > div > p";
export const relatedContentEnterpriseNationMakePlanButton =
  '[data-cy="strive1-initiative-link"]';
export const relatedContentDigitalBoostTitleText =
  "body > app-root > div > app-home-page > div.row.mx-0.initiatives > div > div > div > div:nth-child(2) > app-initiative > div > h1";
export const relatedContentDigitalBoostGuidanceText =
  "body > app-root > div > app-home-page > div.row.mx-0.initiatives > div > div > div > div:nth-child(2) > app-initiative > div > p";
export const relatedContentDigitalBoostGuidanceButton =
  '[data-cy="strive2-initiative-link"]';
export const relatedContentStrivingTitleText =
  "body > app-root > div > app-home-page > div.row.mx-0.initiatives > div > div > div > div:nth-child(3) > app-initiative > div > h1";
export const relatedContentStrivingEnterpriseText =
  "body > app-root > div > app-home-page > div.row.mx-0.initiatives > div > div > div > div:nth-child(3) > app-initiative > div > p";
export const relatedContentStrivingEnterpriseButton =
  '[data-cy="strive3-initiative-link"]';

export const mapForRelatedContentButtons = {
  "Enterprise nation": relatedContentEnterpriseNationMakePlanButton,
  "Digital boost": relatedContentDigitalBoostGuidanceButton,
  "Striving to thrive 2022 report": relatedContentStrivingEnterpriseButton,
};

// Shared insights
export const mapForKpis = {
  "Active Food & Drink places": {
    Container: priceActivePlacesCard,
    "Accordion button": priceActivePlacesAccordionButton,
    Yes: priceActivePlacesInsightYesAnswerButton,
    No: priceActivePlacesInsightNoAnswerButton,
  },
  "Food and Drinks spots": {
    Container: priceFoodAndDrinkCard,
    "Accordion button": priceFoodAndDrinkAccordionButton,
    Yes: priceFoodAndDrinkInsightYesAnswerButton,
    No: priceFoodAndDrinkInsightNoAnswerButton,
  },
  "Food and Drinks opening hours": {
    Container: timeOpeningHoursCard,
    "Accordion button": timeOpeningHoursccordionButton,
    Yes: timeOpeningHoursInsightYesAnswerButton,
    No: timeOpeningHoursInsightNoAnswerButton,
  },
  "Top 20% places revenue": {
    Container: insightsTop20Card,
    Yes: insightsTop20InsightYesAnswerButton,
    No: insightsTop20InsightNoAnswerButton,
  },
  "Area trending": {
    Container: insightsAreaTrendingCard,
    "Accordion button": insightsAreaTrendingAccordionButton,
    Yes: insightsAreaTrendingYesAnswerButton,
    No: insightsAreaTrendingNoAnswerButton,
  },
  "Position in the city": {
    Container: insightsAverageBillCard,
    Yes: insightsAverageBillInsightYesAnswerButton,
    No: insightsAverageBillInsightNoAnswerButton,
  },
  "Hourly sales": {
    Container: insightsHourlySalesCard,
    "Accordion button": insightsHourlySalesAccordionButton,
    Yes: insightsHourlySalesInsightNoAnswerButton,
    No: insightsHourlySalesInsightYesAnswerButton,
  },
  "Weekly spend": {
    Container: insightsWeeklySpendCard,
    Yes: insightsWeeklySpendInsightYesAnswerButton,
    No: insightsWeeklySpendInsightNoAnswerButton,
  },
  "COVID Lockdown": {
    Container: insightsCovidLockdownCard,
    "Accordion button": insightsCovidLockdownInsightAccordionButton,
    Yes: insightsCovidLockdownInsightYesAnswerButton,
    No: insightsCovidLockdownInsightNoAnswerButton,
  },
  "Inflaction and cost of living": {
    Container: insightsInflationCostOfLivingCard,
    "Accordion button": insightsInflationCostOfLivingInsightAccordionButton,
    Yes: insightsCostOfLivingInsightYesAnswerButton,
    No: insightsCostOfLivingInsightNoAnswerButton,
  },
  "Number of your competitor": {
    Container: insightsNumberOfYourCompetitorCard,
    "Accordion button": insightsNumberOfYourCompetitorInsightAccordionButton,
    Yes: insightsNumberOfYourCompetitorInsightYesAnswerButton,
    No: insightsNumberOfYourCompetitorInsightNoAnswerButton,
  },
  "Average bill over time": {
    Container: insightsAverageBillOverTimeCard,
    "Accordion button": insightsAverageBillOverTimeInsightAccordionButton,
    Yes: insightsAverageBillOverTimeInsightYesAnswerButton,
    No: insightsAverageBillOverTimeInsightNoAnswerButton,
  },
};

export const mapForPageContainers = {
  Landing: landingModuleContainer,
  Edit: editContainer,
  "District selection": districtSelectionContainer,
  Infobox: infoboxContainer,
  "Price category": priceCategoryContainer,
  "Time category": timeCategoryContainer,
  Insights: insightsContainer,
  "Interest other district": otherDistrictContainer,
  Feedback: feedbackContainer,
  "Related content": relatedContentContainer,
};

export const mapForGrapqlTimeCategory = {
  "24/7": "OPEN 24-7",
  "Breakfast, lunch and dinner": "Breakfast, lunch and dinner",
  "Breakfast and lunch": "BREAKFAST & LUNCH",
  "Lunch and dinner": "LUNCH & DINNER",
  "One meal only": "LUNCH-DINNER-NIGHTLIFE",
};

// No data
export const noDataContainer = '[data-cy="no-data-container"]';
export const noDataButton = '[data-cy="no-data-button"]';
