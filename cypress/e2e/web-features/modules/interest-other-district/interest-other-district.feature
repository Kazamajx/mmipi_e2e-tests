Feature: Interest in another district module

  @tc:19255
    Scenario Outline: I want to see Interest in another district module on the MMI Public Insights website
        Given I open the <url> url
        When I accept the one trust cookies
        When I type <filter> filters on the location textbox on <url> url
        When I click on the first field of the location dropdown menu on <url> url and <filter> filter
        When I click on the <buttonPrice> button on the Price category selection on <url> url and <filter> filter
        When I click on the <buttonTime> button on the Time category selection on <url> url and <filter> filter and <buttonPrice> price
        Then I see <module> module on the MMI Public Insights website

        Examples:
            | url   | filter | buttonPrice     | buttonTime            | module                    |
            | "/uk" | "bir"  | "Quick service" | "24/7"                | "Interest other district" |

  @tc:19256
    Scenario Outline: I want to see Landing module and I don't want see the other module when I click on the Start over button
        Given I open the <url> url
        When I accept the one trust cookies
        When I type <filter> filters on the location textbox on <url> url
        When I click on the first field of the location dropdown menu on <url> url and <filter> filter
        When I click on the <buttonPrice> button on the Price category selection on <url> url and <filter> filter
        When I click on the <buttonTime> button on the Time category selection on <url> url and <filter> filter and <buttonPrice> price
        When I click on the Start Over button
        Then I see Landing module on the MMI Public Insights website
        Then I see District selection module on the MMI Public Insights website
        Then I don't see Price category module on the MMI Public Insights website
        Then I don't see Time category module on the MMI Public Insights website
        Then I don't see Insight module on the MMI Public Insights website

        Examples:
            | url   | filter | buttonPrice     | buttonTime            |
            | "/uk" | "bir"  | "Quick service" | "24/7"                |