Feature: Related content module

  @tc:19271
    Scenario Outline: I want to see Related content module on the MMI Public Insights website
        Given I open the <url> url
        When I accept the one trust cookies
        When I type <filter> filters on the location textbox on <url> url
        When I click on the first field of the location dropdown menu on <url> url and <filter> filter
        When I click on the <buttonPrice> button on the Price category selection on <url> url and <filter> filter
        When I click on the <buttonTime> button on the Time category selection on <url> url and <filter> filter and <buttonPrice> price
        Then I see <module> module on the MMI Public Insights website

        Examples:
            | url   | filter | buttonPrice     | buttonTime            | module            |
            | "/uk" | "bir"  | "Quick service" | "24/7"                | "Related content" |


    