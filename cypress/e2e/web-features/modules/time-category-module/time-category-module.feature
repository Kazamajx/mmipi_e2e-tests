Feature: Time category module

  @tc:19275
    Scenario Outline: I want to see Price category module on the MMI Public Insights website
        Given I open the <url> url
        When I accept the one trust cookies
        When I type <filter> filters on the location textbox on <url> url
        When I click on the first field of the location dropdown menu on <url> url and <filter> filter
        When I click on the <button> button on the Price category selection on <url> url and <filter> filter
        Then I see <module> module on the MMI Public Insights website

        Examples:
            | url   | filter | button          | module          |
            | "/uk" | "bir"  | "Quick service" | "Time category" |

  @tc:19276
    Scenario Outline: I want to see the correct KPIs on the Price category module
        Given I open the <url> url
        When I accept the one trust cookies
        When I type <filter> filters on the location textbox on <url> url
        When I click on the first field of the location dropdown menu on <url> url and <filter> filter
        When I click on the <button> button on the Price category selection on <url> url and <filter> filter
        Then I see the correct KPIs on the Time category module

        Examples:
            | url   | filter | button          |
            | "/uk" | "bir"  | "Quick service" |

  @tc:19277
    Scenario Outline: I want to see the Insights module clicking on the related buttons
        Given I open the <url> url
        When I accept the one trust cookies
        When I type <filter> filters on the location textbox on <url> url
        When I click on the first field of the location dropdown menu on <url> url and <filter> filter
        When I click on the <buttonPrice> button on the Price category selection on <url> url and <filter> filter
        When I click on the <buttonTime> button on the Time category selection on <url> url and <filter> filter and <buttonPrice> price
        Then I see Insights module and <url> url choosing <filter> filter <buttonPrice> price and <buttonTime> time

        Examples:
            | url   | filter | buttonPrice     | buttonTime                    |
            | "/uk" | "bir"  | "Quick service" | "24/7"                        |
            | "/uk" | "bir"  | "Quick service" | "Breakfast, lunch and dinner" |
            | "/uk" | "bir"  | "Quick service" | "Breakfast and lunch"         |
            | "/uk" | "bir"  | "Quick service" | "Lunch and dinner"            |
            | "/uk" | "bir"  | "Quick service" | "One meal only"               |