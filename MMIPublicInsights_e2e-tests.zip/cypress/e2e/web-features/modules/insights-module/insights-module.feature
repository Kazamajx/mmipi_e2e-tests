Feature: Insights module

  @tc:19253
    Scenario Outline: I want to see Insights module on the MMI Public Insights website
        Given I open the <url> url
        When I accept the one trust cookies
        When I type <filter> filters on the location textbox on <url> url
        When I click on the first field of the location dropdown menu on <url> url and <filter> filter
        When I click on the <buttonPrice> button on the Price category selection on <url> url and <filter> filter
        When I click on the <buttonTime> button on the Time category selection on <url> url and <filter> filter and <buttonPrice> price
        Then I see <module> module on the MMI Public Insights website

        Examples:
            | url   | filter | buttonPrice     | buttonTime            | module     |
            | "/uk" | "bir"  | "Quick service" | "24/7"                | "Insights" |

  @tc:19254
    Scenario Outline: I want to see the correct data on the Insight category module
        Given I open the <url> url
        When I accept the one trust cookies
        When I type <filter> filters on the location textbox on <url> url
        When I click on the first field of the location dropdown menu on <url> url and <filter> filter
        When I click on the <buttonPrice> button on the Price category selection on <url> url and <filter> filter
        When I click on the <buttonTime> button on the Time category selection on <url> url and <filter> filter and <buttonPrice> price
        Then I see the correct data on the <module> module and <url> url choosing <filter> filter <buttonPrice> price and <buttonTime> time category

        Examples:
            | url   | filter | buttonPrice     | buttonTime            | module     |
            | "/uk" | "bir"  | "Quick service" | "24/7"                | "Insights" |