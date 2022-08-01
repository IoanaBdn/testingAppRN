Feature: Scrolling can be carried out

    As a user I can scroll vertically and horizontally

    @actions @scrolling @verticalscrolling
    Scenario: I can scroll vertically
        Given I tap on the 'Members' section
        When I tap the Add Member Icon
        And I scroll 'formBackground' 350 pixels 'down'
        And I scroll 'formBackground' 350 pixels 'up'
        And I scroll 'formBackground' 350 pixels 'down' with X:0.5 and Y:0.85
        And I scroll 'formBackground' 350 pixels 'up' with X:0.5 and Y:0.15

    @actions @scrolling @verticalscrolling
    Scenario: I can scroll vertically to edges
        Given I tap on the 'Members' section
        When I tap the Add Member Icon
        And I scroll 'formBackground' to the 'bottom'
        Then I scroll 'formBackground' to the 'top'

    @actions @scrolling @verticalscrolling
    Scenario: I can scroll vertically to element
        Given I tap on the 'Members' section
        When I tap the Add Member Icon
        And I scroll 'formBackground' to 'fxormLabel-startDate' at 50 pixels 'down'
        Then I scroll 'formBackground' to 'formLabel-surname' at 50 pixels 'up'

    @actions @scrolling @horizontalscrolling @test
    Scenario: I can scroll horizontally on a Flatlist
        Given I tap on the 'Cities' section
        When I scroll 'imageBackground-europe' to 'image-europe-3' at 50 pixels 'right'
        When I scroll 'imageBackground-europe' to 'image-europe-0' at 50 pixels 'left'






