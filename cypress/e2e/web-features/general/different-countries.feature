Feature: Different characteristics according to the tenant

  @tc:22199
  Scenario Outline: I want to see the correct platform on the MMI Public Insights website
        Given I open the <url> url
        Then I see the <url> url in the searchbar

        Examples:
            | url   |
            | "/uk" |
            | "/it" |
            
  @tc:19205
    Scenario Outline: I want to see the correct language on the MMI Public Insights website
        Given I open the <url> url
        Then I see the <url> with <language> language

        Examples:
            | url   | language |
            | "/uk" | "en"     |
            | "/it" | "it"     |
    
  @tc:21980
    Scenario Outline: I want to see the correct currency on the MMI Public Insights website
        Given I open the <url> url
        Then I see the <url> with <currency> currency

        Examples:
            | url   | currency |
            | "/uk" | "£"      |
            | "/it" | "€"      |