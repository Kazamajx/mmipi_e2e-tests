Feature: MMI Public Insights website

  @tc:19205
    Scenario Outline: I want to see the correct MMI Public Insights website
        Given I open the <url> url
        Then I see <title> as title

        Examples:
            | url   | title                          |
            | "/uk" | "Mastercard Business Insights" |