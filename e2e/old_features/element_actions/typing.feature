Feature: Typing into input elements

    As a user I can type in suitable elements

    @actions @typing
    Scenario: I can type in an input field
        Given I tap on the 'Members' section
        When I tap the Add Member Icon
        Then I type 'Ioana' as Name and 'Test' as Surname
        And I replace 'Test' in Name and 'Ioana' in Surname
        Then I enter 'Ioana' in Name and 'Test' in Surname