Feature: Active Food and Drink places KPI on the Price Category module

  @tc:19260
    Scenario Outline: I want to see Active Food and Drink places KPI on the MMI Public Insights website
        Given I open the <url> url
        When I accept the one trust cookies
        When I type <filter> filters on the location textbox on <url> url
        When I click on the first field of the location dropdown menu on <url> url and <filter> filter
        Then I see <kpi> KPI on the MMI Public Insights website

        Examples:
            | url   | filter | kpi                          |
            | "/uk" | "bir"  | "Active Food & Drink places" |

  @tc:19261
    Scenario Outline: I want to see the correct data on the Active Food & Drink places kpi
        Given I open the <url> url
        When I accept the one trust cookies
        When I type <filter> filters on the location textbox on <url> url
        When I click on the first field of the location dropdown menu on <url> url and <filter> filter
        Then I see the correct data on the <module> module on <url> url and <filter> filter

        Examples:
            | url   | filter | module                       |
            | "/uk" | "bir"  | "Active Food & Drink places" |

  @tc:19262
    Scenario Outline: I want to see the Food and Drinks spots accordion expanded
        Given I open the <url> url
        When I accept the one trust cookies
        When I type <filter> filters on the location textbox on <url> url
        When I click on the first field of the location dropdown menu on <url> url and <filter> filter
        When I click on the <kpi> kpi accordion button
        Then I see the <kpi> kpi accordion expanded

        Examples:
            | url   | filter | kpi                          |
            | "/uk" | "bir"  | "Active Food & Drink places" |

  @tc:19263
    Scenario Outline: I want to click on the Yes or No buttons on the Active Food and Drink places KPI
        Given I open the <url> url
        When I accept the one trust cookies
        When I type <filter> filters on the location textbox on <url> url
        When I click on the first field of the location dropdown menu on <url> url and <filter> filter
        When I click on the <button> button on the <kpi> kpi
        Then I see the correct <button> clicked on the <kpi> kpi

        Examples:
            | url   | filter | kpi                          | button |
            | "/uk" | "bir"  | "Active Food & Drink places" | "Yes"  |
            | "/uk" | "bir"  | "Active Food & Drink places" | "No"   |

    