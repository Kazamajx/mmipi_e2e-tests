Feature: Number of your competitor KPI on the Insights module

  @tc:19247
    Scenario Outline: I want to see Number of your competitors KPI on the MMI Public Insights website
        Given I open the <url> url
        When I accept the one trust cookies
        When I type <filter> filters on the location textbox on <url> url
        When I click on the first field of the location dropdown menu on <url> url and <filter> filter
        When I click on the <buttonPrice> button on the Price category selection on <url> url and <filter> filter
        When I click on the <buttonTime> button on the Time category selection on <url> url and <filter> filter and <buttonPrice> price
        Then I see <kpi> KPI on the MMI Public Insights website

        Examples:
            | url   | filter | buttonPrice     | buttonTime                    | kpi                           |
            | "/uk" | "bir"  | "Quick service" | "Breakfast, lunch and dinner" | "Number of your competitor"   |

  @tc:19248
    Scenario Outline: I want to see the accordion expanded in the Number of your competitors KPI
        Given I open the <url> url
        When I accept the one trust cookies
        When I type <filter> filters on the location textbox on <url> url
        When I click on the first field of the location dropdown menu on <url> url and <filter> filter
        When I click on the <buttonPrice> button on the Price category selection on <url> url and <filter> filter
        When I click on the <buttonTime> button on the Time category selection on <url> url and <filter> filter and <buttonPrice> price
        When I click on the <kpi> kpi accordion button
        Then I see the <kpi> kpi accordion expanded

        Examples:
            | url   | filter | buttonPrice     | buttonTime                    | kpi                           |
            | "/uk" | "bir"  | "Quick service" | "Breakfast, lunch and dinner" | "Number of your competitor"   |

  @tc:19249
    Scenario Outline: I want to click on the Yes or No buttons on the Number of your competitors KPI
        Given I open the <url> url
        When I accept the one trust cookies
        When I type <filter> filters on the location textbox on <url> url
        When I click on the first field of the location dropdown menu on <url> url and <filter> filter
        When I click on the <buttonPrice> button on the Price category selection on <url> url and <filter> filter
        When I click on the <buttonTime> button on the Time category selection on <url> url and <filter> filter and <buttonPrice> price
        When I click on the <buttonYesNo> button on the <kpi> kpi
        Then I see the correct <buttonYesNo> clicked on the <kpi> kpi

        Examples:
            | url   | filter | buttonPrice     | buttonTime                    | kpi                         | buttonYesNo |
            | "/uk" | "bir"  | "Quick service" | "Breakfast, lunch and dinner" | "Number of your competitor" | "Yes"       |
            | "/uk" | "bir"  | "Quick service" | "Breakfast, lunch and dinner" | "Number of your competitor" | "No"        |