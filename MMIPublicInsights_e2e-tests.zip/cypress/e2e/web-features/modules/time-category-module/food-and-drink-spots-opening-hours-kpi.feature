Feature: Food and Drink spots in your district by opening hours KPI on the Price Category module

  @tc:19272
    Scenario Outline: I want to see Food and Drink spots in your district by opening hours KPI on the MMI Public Insights website
        Given I open the <url> url
        When I accept the one trust cookies
        When I type <filter> filters on the location textbox on <url> url
        When I click on the first field of the location dropdown menu on <url> url and <filter> filter
        When I click on the <button> button on the Price category selection on <url> url and <filter> filter
        Then I see <kpi> KPI on the MMI Public Insights website

        Examples:
            | url   | filter | button          | kpi                             |
            | "/uk" | "bir"  | "Quick service" | "Food and Drinks opening hours" |
    
  @tc:19273
    Scenario Outline: I want to see the Food and Drinks opening hours accordion expanded
        Given I open the <url> url
        When I accept the one trust cookies
        When I type <filter> filters on the location textbox on <url> url
        When I click on the first field of the location dropdown menu on <url> url and <filter> filter
        When I click on the <button> button on the Price category selection on <url> url and <filter> filter
        When I click on the <kpi> kpi accordion button
        Then I see the <kpi> kpi accordion expanded

        Examples:
            | url   | filter | button          | kpi                             |
            | "/uk" | "bir"  | "Quick service" | "Food and Drinks opening hours" |

  @tc:19274
    Scenario Outline: I want to click on the Yes or No buttons on the Food and Drink spots in your district by opening hours KPI
        Given I open the <url> url
        When I accept the one trust cookies
        When I type <filter> filters on the location textbox on <url> url
        When I click on the first field of the location dropdown menu on <url> url and <filter> filter
        When I click on the <buttonprice> button on the Price category selection on <url> url and <filter> filter
        When I click on the <buttonyesno> button on the <kpi> kpi
        Then I see the correct <buttonyesno> clicked on the <kpi> kpi

        Examples:
            | url   | filter | buttonprice     | kpi                             | buttonyesno |
            | "/uk" | "bir"  | "Quick service" | "Food and Drinks opening hours" | "Yes"       |
            | "/uk" | "bir"  | "Quick service" | "Food and Drinks opening hours" | "No"        |