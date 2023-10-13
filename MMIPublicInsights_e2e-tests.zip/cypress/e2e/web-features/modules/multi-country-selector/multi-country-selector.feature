Feature: Multi-country selector

  @tc:22143
    Scenario Outline: I want to see the multi-country selector
        Given I open the <url> url
        When I accept the one trust cookies
        Then I see the multi-country selector dropdown menu

        Examples:
            | url   |
            | "/uk" |
            | "/it" |

  @tc:22144
    Scenario Outline: I want to see the field selected by default changing according to the country reached
        Given I open the <url> url
        When I accept the one trust cookies
        Then The field selected by default in the multi-country selector dropdown menu belongs to the <country> country

        Examples:
            | url   | country          |
            | "/uk" | "United Kingdom" |
            | "/it" | "Italy"          |

  @tc:22145
    Scenario Outline: I only want to see fields under the dropdown menu for which the platform is available
        Given I open the <url> url
        When I accept the one trust cookies
        When I expand the multi-country dropdown selector
        Then I see different countries from the <country> country under the multi-country dropdown selector

        Examples:
            | url   | country          |
            | "/uk" | "United Kingdom" |
            | "/it" | "Italy"          |

  @tc:22147
    Scenario Outline: I want to see the platform change correctly when I click on a field in the dropdown menu
        Given I open the <url> url
        When I accept the one trust cookies
        When I expand the multi-country dropdown selector
        When I click in the <country> country field under the multi-country drodpdown selector
        Then I see the platform changing according to the <country> country and <expectedUrl> url
        
        Examples:
            | url   | country          | expectedUrl |
            | "/uk" | "Italy"          | "/it"       |
            | "/it" | "United Kingdom" | "/uk"       |