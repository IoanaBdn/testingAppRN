Feature: Delete Member

    Members can be deleted via the member list screen

    Background: I navigate to the Add Member form
        Given I tap on the 'Members' navigation tab section
        And I tap the Add Member icon

    @members @deletemembers
    Scenario Outline: I verify that members can be added through the add member form
        When I fill in the form with:
            | name   | surname | b_day   | b_month   | b_year   | address_one    | address_two    | city      | postcode | country   | start_hour   | start_minute   | member        |
            | <name> | Test    | <b_day> | <b_month> | <b_year> | Test Address 1 | Test Address 2 | Test City | test1n   | <country> | <start_hour> | <start_minute> | <memberCount> |
        And the Member List page is correctly displayed for <memberCount> members
        When I delete Member number <memberCount>
        Then the Member List page is correctly displayed for <memberCount_2> members

        Examples:
            | name  | b_day | b_month | b_year | country | start_hour | start_minute | memberCount | memberCount_2 |
            | Ioana | 01    | 11      | 1995   | Canada  | 19         | 35           | 1           | 0             |
