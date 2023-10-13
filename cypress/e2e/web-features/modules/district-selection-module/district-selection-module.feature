Feature: District selection module

  @tc:19206
    Scenario Outline: I want to see the District selection module on the MMI Public Insights website
        Given I open the <url> url
        When I accept the one trust cookies
        Then I see <module> module on the MMI Public Insights website

        Examples:
            | url   | module               |
            | "/uk" | "District selection" |

  @tc:19207
    Scenario Outline: I want search a group of locations on the District selection module
        Given I open the <url> url
        When I accept the one trust cookies
        When I type <filters> filters on the location textbox on <url> url
        Then I see the area location list
        Then All fields in the list contain <filters> filters

        Examples:
            | url   | filters |
            | "/uk" | "bir"   |
    
  @tc:19208
    Scenario Outline: I want to see the information about a location that contains a group of characters
        Given I open the <url> url
        When I accept the one trust cookies
        When I type <filter> filters on the location textbox on <url> url
        When I click on the first field of the location dropdown menu on <url> url and <filter> filter
        Then I see the information about a location that contains <filter> filters

        Examples:
            | url   | filter |
            | "/uk" | "bir"  |