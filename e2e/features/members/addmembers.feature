Feature: Add Member

    Members can be created via the add member form

    Background: I navigate to the Add Member form
        Given I tap on the 'Members' navigation tab section
        And I tap the Add Member icon

    @members @addmembers @test
    Scenario Outline: I verify that members can be added through the add member form
        When I fill in the form with:
            | name   | surname | b_day   | b_month   | b_year   | start_day   | address_one    | address_two    | city      | postcode | country   | start_date   | start_month   | start_year   | start_hour   | start_minute   | member        |
            | <name> | Test    | <b_day> | <b_month> | <b_year> | <start_day> | Test Address 1 | Test Address 2 | Test City | test1n   | <country> | <start_date> | <start_month> | <start_year> | <start_hour> | <start_minute> | <memberCount> |
        And the Member List page is correctly displayed for <memberCount> members
        When I tap on the Member number <memberCount>
        Then The Show Member page is correctly displayed with:
            | name   | surname | b_day   | b_month   | b_year   | start_day   | address_one    | address_two    | city      | postcode | country   | start_date   | start_month   | start_year   | start_hour   | start_minute   | member        |
            | <name> | Test    | <b_day> | <b_month> | <b_year> | <start_day> | Test Address 1 | Test Address 2 | Test City | test1n   | <country> | <start_date> | <start_month> | <start_year> | <start_hour> | <start_minute> | <memberCount> |

        Examples:
            | name  | b_day | b_month | b_year | start_day | country | start_date | start_month | start_year | start_hour | start_minute | memberCount |
            | Ioana | 01    | 11      | 1995   | Friday    | Canada  | 26         | August      | 2022       | 19         | 35           | 1           |
            | Test  | 10    | 12      | 1995   | Wednesday | Andorra | 21         | September   | 2022       | 19         | 20           | 2           |