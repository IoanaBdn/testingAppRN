Feature: The different Pickers can be interacted with on both operating systems

    DatePickers, Pickers and Time Pickers can be used in Detox

    Background: I navigate to the Add a Member screen
        Given I tap on the 'Members' section
        And I tap the Add Member Icon

    @pickers @datepickers
    Scenario: I can interact with the DatePickers and Pickers
        When I enter '06' '02' '1981' as Date of Birth
        And I select 'Thursday' as Start Day
        And I select 'Denmark' as Country swiping 'up'
        Then I enter '17' '35' as Start Time