Feature: All member screen can be displayed

    As a user with no memembers, I can navigate through different members screens

    @members @memberlist @navigation
    Scenario: Verify that the Member List screen is correctly displayed
        Given I tap on the 'Members' Home section
        When the Member List page is correctly displayed for 0 members
        And I tap the back button
        Then the Home page is correctly displayed