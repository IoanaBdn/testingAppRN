Feature: Add Member

    Members can be created via the add member form

    Background: I navigate to the Add Member form
        Given I tap on the 'Members' navigation tab section
        And I tap the Add Member icon

    @members @addmembers @test
    Scenario Outline: I verify that members can be added through the add member form
        When I fill in the form with:
            | name   | surname | b_day   | b_month   | b_year   | start_day   | email         | address_one    | address_two    | city      | postcode | country   | start_date   | start_month   | start_year   | start_hour   | start_minute   | member        |
            | <name> | Test    | <b_day> | <b_month> | <b_year> | <start_day> | test@test.com | Test Address 1 | Test Address 2 | Test City | test1n   | <country> | <start_date> | <start_month> | <start_year> | <start_hour> | <start_minute> | <memberCount> |
        And the Member List page is correctly displayed for <memberCount> members

        Examples:
            | name  | b_day | b_month | b_year | start_day | country | start_date | start_month | start_year | start_hour | start_minute | memberCount |
            | Ioana | 01    | 11      | 1995   | Friday    | Canada  | 4          | November    | 2022       | 19         | 35           | 1           |