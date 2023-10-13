Feature: Area trending KPI on the Insights module

  @tc:19226
    Scenario Outline: I want to see Position in the city KPI on the MMI Public Insights website
        Given I open the <url> url
        When I accept the one trust cookies
        When I type <filter> filters on the location textbox on <url> url
        When I click on the first field of the location dropdown menu on <url> url and <filter> filter
        When I click on the <buttonPrice> button on the Price category selection on <url> url and <filter> filter
        When I click on the <buttonTime> button on the Time category selection on <url> url and <filter> filter and <buttonPrice> price
        Then I see <kpi> KPI on the MMI Public Insights website

        Examples:
            | url   | filter | buttonPrice     | buttonTime                    | kpi               |
            | "/uk" | "bir"  | "Quick service" | "Breakfast, lunch and dinner" | "Area trending"   |

  @tc:19227
    Scenario Outline: I want to see the correct data on the Area trending module
        Given I open the <url> url
        When I accept the one trust cookies
        When I type <filter> filters on the location textbox on <url> url
        When I click on the first field of the location dropdown menu on <url> url and <filter> filter
        When I click on the <buttonPrice> button on the Price category selection on <url> url and <filter> filter
        When I click on the <buttonTime> button on the Time category selection on <url> url and <filter> filter and <buttonPrice> price
        Then I see the correct data on the <module> module and <url> url choosing <filter> filter <buttonPrice> price and <buttonTime> time category

        Examples:
            | url   | filter | buttonPrice     | buttonTime            | module          |
            | "/uk" | "bir"  | "Quick service" | "24/7"                | "Area trending" |

  @tc:19228
    Scenario Outline: I want to click on the Yes or No buttons on the Position in the city KPI
        Given I open the <url> url
        When I accept the one trust cookies
        When I type <filter> filters on the location textbox on <url> url
        When I click on the first field of the location dropdown menu on <url> url and <filter> filter
        When I click on the <buttonPrice> button on the Price category selection on <url> url and <filter> filter
        When I click on the <buttonTime> button on the Time category selection on <url> url and <filter> filter and <buttonPrice> price
        When I click on the <buttonYesNo> button on the <kpi> kpi
        Then I see the correct <buttonYesNo> clicked on the <kpi> kpi

        Examples:
            | url   | filter | buttonPrice     | buttonTime                    | kpi             | buttonYesNo |
            | "/uk" | "bir"  | "Quick service" | "Breakfast, lunch and dinner" | "Area trending" | "Yes"       |
            | "/uk" | "bir"  | "Quick service" | "Breakfast, lunch and dinner" | "Area trending" | "No"        |