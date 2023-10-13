Feature: Landing module

  @tc:19259
    Scenario Outline: I want to see Landing module on the MMI Public Insights website
        Given I open the <url> url
        When I accept the one trust cookies
        Then I see <module> module on the MMI Public Insights website

        Examples:
            | url   | module    |
            | "/uk" | "Landing" |