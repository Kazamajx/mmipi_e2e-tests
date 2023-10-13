Feature: Food and Drink spots in your district by price KPI on the Price Category module

  @tc:19264
    Scenario Outline: I want to see Food and Drink spots in your district by price KPI on the MMI Public Insights website
        Given I open the <url> url
        When I accept the one trust cookies
        When I type <filter> filters on the location textbox on <url> url
        When I click on the first field of the location dropdown menu on <url> url and <filter> filter
        Then I see <kpi> KPI on the MMI Public Insights website

        Examples:
            | url   | filter | kpi                     |
            | "/uk" | "bir"  | "Food and Drinks spots" |

  @tc:19265
    Scenario Outline: I want to see the Food and Drinks spots accordion expanded
        Given I open the <url> url
        When I accept the one trust cookies
        When I type <filter> filters on the location textbox on <url> url
        When I click on the first field of the location dropdown menu on <url> url and <filter> filter
        When I click on the <kpi> kpi accordion button
        Then I see the <kpi> kpi accordion expanded

        Examples:
            | url   | filter | kpi                     |
            | "/uk" | "bir"  | "Food and Drinks spots" |

  @tc:19266
    Scenario Outline: I want to click on the Yes or No buttons on the Food and Drink spots in your district by price KPI
        Given I open the <url> url
        When I accept the one trust cookies
        When I type <filter> filters on the location textbox on <url> url
        When I click on the first field of the location dropdown menu on <url> url and <filter> filter
        When I click on the <button> button on the <kpi> kpi
        Then I see the correct <button> clicked on the <kpi> kpi

        Examples:
            | url   | filter | kpi                     | button |
            | "/uk" | "bir"  | "Food and Drinks spots" | "Yes"  |
            | "/uk" | "bir"  | "Food and Drinks spots" | "No"   |