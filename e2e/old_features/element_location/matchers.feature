Feature: Element matchers

    Elements can be located using the various matchers supported by Detox


    Background: I navigate to Counter section
        Given I tap on the Counters section by text


    @matchers @text
    Scenario: I can locate elements by text
    When I tap on the Water counter by text
    And I tap on the Electricity counter by text
    And I tap on the Gas counter by text
    Then I tap on the Broadband counter by text

    @matchers @label
    Scenario: I can locate elements by label
    When I tap the Home navigation section by label 
    And I tap on the Counters section by text
    Then I tap on the Water Counter by label

    @matchers @id
    Scenario: I can locate elements by id
    When I tap on the Water Counter by id
    And I tap on the Electricity Counter by id
    And I tap on the Gas Counter by id
    Then I tap on the Broadband Counter by id

    @matchers @multiple
    Scenario: I can locate elements by multiple matchers
    When I tap on the Water Counter Title by type and text
    And I tap on the Electricity Counter by traits and text
    And I tap on the Gas Counter by ancestor ID and descendant text
    Then I tap on the Broadband Counter by descendant text and ancestor type
    And I tap the back button










