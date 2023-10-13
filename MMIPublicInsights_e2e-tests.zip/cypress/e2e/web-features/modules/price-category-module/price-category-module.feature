Feature: Price category module

  @tc:19267
    Scenario Outline: I want to see Price category module on the MMI Public Insights website
        Given I open the <url> url
        When I accept the one trust cookies
        When I type <filter> filters on the location textbox on <url> url
        When I click on the first field of the location dropdown menu on <url> url and <filter> filter
        Then I see <module> module on the MMI Public Insights website

        Examples:
            | url   | filter | module           |
            | "/uk" | "bir"  | "Price category" |
    
  @tc:19268
    Scenario Outline: I want to see the correct data on the Price category module
        Given I open the <url> url
        When I accept the one trust cookies
        When I type <filter> filters on the location textbox on <url> url
        When I click on the first field of the location dropdown menu on <url> url and <filter> filter
        Then I see the correct data on the <module> module on <url> url and <filter> filter

        Examples:
            | url   | filter | module           |
            | "/uk" | "bir"  | "Price category" |

  @tc:19269
    Scenario Outline: I want to see the correct KPIs on the Price category module
        Given I open the <url> url
        When I accept the one trust cookies
        When I type <filter> filters on the location textbox on <url> url
        When I click on the first field of the location dropdown menu on <url> url and <filter> filter
        Then I see the correct KPIs on the Price category module

        Examples:
            | url   | filter |
            | "/uk" | "bir"  |
    
  @tc:19270
    Scenario Outline: I want to see the Time category module clicking on the related buttons
        Given I open the <url> url
        When I accept the one trust cookies
        When I type <filter> filters on the location textbox on <url> url
        When I click on the first field of the location dropdown menu on <url> url and <filter> filter
        When I click on the <button> button on the Price category selection on <url> url and <filter> filter
        Then I see Time category module on <url> and <filter> filter and <button> button

        Examples:
            | url   | filter | button          |
            | "/uk" | "bir"  | "Quick service" |
            | "/uk" | "bir"  | "Fast casual"   |
            | "/uk" | "bir"  | "Casual dining" |
            | "/uk" | "bir"  | "Fine dining"   |