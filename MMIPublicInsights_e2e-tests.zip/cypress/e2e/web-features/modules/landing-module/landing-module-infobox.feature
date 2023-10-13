Feature: Landing module - Infobox

  @tc:19257
    Scenario Outline: I want to see the infobox in the Landing module on the MMI Public Insights website
        Given I open the <url> url
        When I accept the one trust cookies
        Then I see <module> module on the MMI Public Insights website

        Examples:
            | url   | module    |
            | "/uk" | "Infobox" |

    
  @tc:19258
    Scenario Outline: I want to see the two accordions expanded in the infobox
        Given I open the <url> url
        When I accept the one trust cookies
        When I tap on the <accordion> accordion in the infobox
        Then I see the <accordion> accordion expanded in the infobox

        Examples:
            | url   | accordion |
            | "/uk" | "First"   |
            | "/uk" | "Second"  |