Feature: Feedback module

  @tc:19222
    Scenario Outline: I want to see Feedback module on the MMI Public Insights website
        Given I open the <url> url
        When I accept the one trust cookies
        When I type <filter> filters on the location textbox on <url> url
        When I click on the first field of the location dropdown menu on <url> url and <filter> filter
        When I click on the <buttonPrice> button on the Price category selection on <url> url and <filter> filter
        When I click on the <buttonTime> button on the Time category selection on <url> url and <filter> filter and <buttonPrice> price
        Then I see <module> module on the MMI Public Insights website

        Examples:
            | url   | filter | buttonPrice     | buttonTime            | module     |
            | "/uk" | "bir"  | "Quick service" | "24/7"                | "Feedback" |

  @tc:19223
    Scenario Outline: I want to see Submit button disabled as default on the Feedback module
        Given I open the <url> url
        When I accept the one trust cookies
        When I type <filter> filters on the location textbox on <url> url
        When I click on the first field of the location dropdown menu on <url> url and <filter> filter
        When I click on the <buttonPrice> button on the Price category selection on <url> url and <filter> filter
        When I click on the <buttonTime> button on the Time category selection on <url> url and <filter> filter and <buttonPrice> price
        Then I see Submit button disabled as default on the Feedback module

        Examples:
            | url   | filter | buttonPrice     | buttonTime            | module     |
            | "/uk" | "bir"  | "Quick service" | "24/7"                | "Feedback" |

  @tc:19224
    Scenario Outline: I want to see Submit button enabled when a text is insert on the Feedback module
        Given I open the <url> url
        When I accept the one trust cookies
        When I type <filter> filters on the location textbox on <url> url
        When I click on the first field of the location dropdown menu on <url> url and <filter> filter
        When I click on the <buttonPrice> button on the Price category selection on <url> url and <filter> filter
        When I click on the <buttonTime> button on the Time category selection on <url> url and <filter> filter and <buttonPrice> price
        When I type <text> text on the Feedback module textbox
        Then I see Submit button enabled as default on the Feedback module

        Examples:
            | url   | filter | buttonPrice     | buttonTime            | text          |
            | "/uk" | "bir"  | "Quick service" | "24/7"                | "This a text" |

  @tc:19225
    Scenario Outline: I want to send a feedback through the Feedback module
        Given I open the <url> url
        When I accept the one trust cookies
        When I type <filter> filters on the location textbox on <url> url
        When I click on the first field of the location dropdown menu on <url> url and <filter> filter
        When I click on the <buttonPrice> button on the Price category selection on <url> url and <filter> filter
        When I click on the <buttonTime> button on the Time category selection on <url> url and <filter> filter and <buttonPrice> price
        When I type <text> text on the Feedback module textbox
        Then I click on the Submit button on the <url> url and the feedback is sent

        Examples:
            | url   | filter | buttonPrice     | buttonTime            | text          |
            | "/uk" | "bir"  | "Quick service" | "24/7"                | "This a text" |