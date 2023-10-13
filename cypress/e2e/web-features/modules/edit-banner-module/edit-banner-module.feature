Feature: Edit banner

  @tc:19209
    Scenario Outline: I don t want to see the Edit container when the Landing page is landed
        Given I open the <url> url
        When I accept the one trust cookies
        Then I don t see <module> module on the MMI Public Insights website

        Examples:
            | url   | module |
            | "/uk" | "Edit" |

  @tc:19210
    Scenario Outline: I want to see the Edit container when the Price category page is landed
        Given I open the <url> url
        When I accept the one trust cookies
        When I type <filter> filters on the location textbox on <url> url
        When I click on the first field of the location dropdown menu on <url> url and <filter> filter
        Then I see <module> module on the MMI Public Insights website

        Examples:
            | url   | filter | module |
            | "/uk" | "bir"  | "Edit" |

  @tc:19211
    Scenario Outline: I want to see the text with a correct format on the Edit banner when the Price category page is landed
        Given I open the <url> url
       When I accept the one trust cookies
        When I type <filter> filters on the location textbox on <url> url
        When I click on the first field of the location dropdown menu on <url> url and <filter> filter
        Then I see the text with a correct format on the <module> module on <url> url and <filter> filter 

        Examples:
            | url   | filter | module |
            | "/uk" | "bir"  | "Edit" |

  @tc:19212
    Scenario Outline: I want to change a location on the Edit banner when the Price category page is landed
        Given I open the <url> url
        When I accept the one trust cookies
        When I type <filter> filters on the location textbox on <url> url
        When I click on the first field of the location dropdown menu on <url> url and <filter> filter
        When I click on the Edit button
        When I delete the previous location
        When I type <filter2> filters on the Edit location textbox on <url> url
        When I click on the first field of the Edit location dropdown menu on <url> url
        When I click on the Apply button when only Price category page is present on <url> url
        Then I see the text with a correct format on the <module> module on <url> url and <filter2> filter

        Examples:
            | url   | filter | module | filter2 |
            | "/uk" | "bir"  | "Edit" | "B2"    |

  @tc:19213
    Scenario Outline: I want to see the Edit container when the Time category page is landed
        Given I open the <url> url
        When I accept the one trust cookies
        When I type <filter> filters on the location textbox on <url> url
        When I click on the first field of the location dropdown menu on <url> url and <filter> filter
        When I click on the <button> button on the Price category selection on <url> url and <filter> filter
        Then I see <module> module on the MMI Public Insights website

        Examples:
            | url   | filter | button          | module |
            | "/uk" | "bir"  | "Quick service" | "Edit" |

  @tc:19214
    Scenario Outline: I want to see the text with a correct format on the Edit banner when the Time category page is landed
        Given I open the <url> url
        When I accept the one trust cookies
        When I type <filter> filters on the location textbox on <url> url
        When I click on the first field of the location dropdown menu on <url> url and <filter> filter
        When I click on the <button> button on the Price category selection on <url> url and <filter> filter
        Then I see the text with a correct format on the <module> module on <url> url and <filter> filter <button> button 

        Examples:
            | url   | filter | button          | module |
            | "/uk" | "bir"  | "Quick service" | "Edit" |

  @tc:19215
    Scenario Outline: I want to change a location on the Edit banner when the Time category page is landed
        Given I open the <url> url
        When I accept the one trust cookies
        When I type <filter> filters on the location textbox on <url> url
        When I click on the first field of the location dropdown menu on <url> url and <filter> filter
        When I click on the <button> button on the Price category selection on <url> url and <filter> filter
        When I click on the Edit button
        When I delete the previous location
        When I type <filter2> filters on the Edit location textbox on <url> url
        When I click on the first field of the Edit location dropdown menu on <url> url
        When I click on the Apply button when Time category is landed on <url> url
        Then I see the text with a correct format on the <module> module on <url> url and <filter2> filter <button> button

        Examples:
            | url   | filter | module | filter2 | button          |
            | "/uk" | "bir"  | "Edit" | "B2"    | "Quick service" |

  @tc:19216
    Scenario Outline: I want to change a the price category on the Edit banner when the Time category page is landed
        Given I open the <url> url
        When I accept the one trust cookies
        When I type <filter> filters on the location textbox on <url> url
        When I click on the first field of the location dropdown menu on <url> url and <filter> filter
        When I click on the <button> button on the Price category selection on <url> url and <filter> filter
        When I click on the Edit button
        When I click on the price category dropdown menu
        When I select <button2> button on the price category dropdown menu
        When I click on the Apply button when Time category is landed on <url> url
        Then I see the text with a correct format on the <module> module on <url> url and <filter> filter <button2> button

        Examples:
            | url   | filter | module | button          | button2       |
            | "/uk" | "bir"  | "Edit" | "Quick service" | "Fast casual" |

  @tc:19217
    Scenario Outline: I want to see the Edit container when the Insights page is landed
        Given I open the <url> url
        When I accept the one trust cookies
        When I type <filter> filters on the location textbox on <url> url
        When I click on the first field of the location dropdown menu on <url> url and <filter> filter
        When I click on the <buttonPrice> button on the Price category selection on <url> url and <filter> filter
        When I click on the <buttonTime> button on the Time category selection on <url> url and <filter> filter and <buttonPrice> price
        Then I see <module> module on the MMI Public Insights website

        Examples:
            | url   | filter | buttonPrice     | buttonTime | module |
            | "/uk" | "bir"  | "Quick service" | "24/7"     | "Edit" |

  @tc:19218
    Scenario Outline: I want to see the text with a correct format on the Edit banner when the Insights page is landed
        Given I open the <url> url
        When I accept the one trust cookies
        When I type <filter> filters on the location textbox on <url> url
        When I click on the first field of the location dropdown menu on <url> url and <filter> filter
        When I click on the <buttonPrice> button on the Price category selection on <url> url and <filter> filter
        When I click on the <buttonTime> button on the Time category selection on <url> url and <filter> filter and <buttonPrice> price
        Then I see the text with a correct format on the <module> module on <url> url and <filter> filter <buttonPrice> button price <buttonTime> button time

        Examples:
            | url   | filter | buttonPrice     | buttonTime | module |
            | "/uk" | "bir"  | "Quick service" | "24/7"     | "Edit" |

  @tc:19219
    Scenario Outline: I want to change a location on the Edit banner when the Insights page is landed
        Given I open the <url> url
        When I accept the one trust cookies
        When I type <filter> filters on the location textbox on <url> url
        When I click on the first field of the location dropdown menu on <url> url and <filter> filter
        When I click on the <buttonPrice> button on the Price category selection on <url> url and <filter> filter
        When I click on the <buttonTime> button on the Time category selection on <url> url and <filter> filter and <buttonPrice> price
        When I click on the Edit button
        When I delete the previous location
        When I type <filter2> filters on the Edit location textbox on <url> url
        When I click on the first field of the Edit location dropdown menu on <url> url
        When I click on the Apply button when Insights page is landed on <url> url
        Then I see the text with a correct format on the <module> module on <url> url and <filter2> filter <buttonPrice> button price <buttonTime> button time

        Examples:
            | url   | filter | module | filter2 | buttonPrice     | buttonTime |
            | "/uk" | "bir"  | "Edit" | "B2"    | "Quick service" | "24/7"     |

  @tc:19220
    Scenario Outline: I want to change a the price category on the Edit banner when the Insights page is landed
        Given I open the <url> url
        When I accept the one trust cookies
        When I type <filter> filters on the location textbox on <url> url
        When I click on the first field of the location dropdown menu on <url> url and <filter> filter
        When I click on the <buttonPrice1> button on the Price category selection on <url> url and <filter> filter
        When I click on the <buttonTime> button on the Time category selection on <url> url and <filter> filter and <buttonPrice1> price
        When I click on the Edit button
        When I click on the price category dropdown menu
        When I select <buttonPrice2> button on the price category dropdown menu
        When I click on the Apply button when Insights page is landed on <url> url
        Then I see the text with a correct format on the <module> module on <url> url and <filter> filter <buttonPrice2> button price <buttonTime> button time

        Examples:
            | url   | filter | module | buttonPrice1    | buttonPrice2  | buttonTime |
            | "/uk" | "bir"  | "Edit" | "Quick service" | "Fast casual" | "24/7"     |
    
  @tc:19221
    Scenario Outline: I want to change the business hour on the Edit banner when the Insights page is landed
        Given I open the <url> url
        When I accept the one trust cookies
        When I type <filter> filters on the location textbox on <url> url
        When I click on the first field of the location dropdown menu on <url> url and <filter> filter
        When I click on the <buttonPrice> button on the Price category selection on <url> url and <filter> filter
        When I click on the <buttonTime1> button on the Time category selection on <url> url and <filter> filter and <buttonPrice> price
        When I click on the Edit button
        When I click on the business hours dropdown menu
        When I select <buttonTime2> button on the business hours dropdown menu
        When I click on the Apply button when Insights page is landed on <url> url
        Then I see the text with a correct format on the <module> module on <url> url and <filter> filter <buttonPrice> button price <buttonTime2> button time

        Examples:
            | url   | filter | module | buttonPrice     | buttonTime1 | buttonTime2                   |
            | "/uk" | "bir"  | "Edit" | "Quick service" | "24/7"      | "Breakfast, lunch and dinner" |

    