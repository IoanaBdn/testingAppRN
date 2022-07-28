Feature: Swiping can be carried out

    As a user I can swipe verically and horizontally

    @actions @swiping @verticalswiping
    Scenario: I can swipe vertically
        Given I tap on the 'Members' section
        When I tap the Add Member Icon
        And I swipe 'formBackground' 'up'
        And I swipe 'formBackground' 'down'
        And I swipe 'formBackground' 'up' 'slow'
        Then I swipe 'formBackground' 'down' 'slow' for 0.5 of the screen

    @actions @swiping @horizontalswiping
    Scenario: I can swipe horizontally
        Given I tap on the 'Cities' section
        When I swipe 'imageBackground-usa/canada' 'left'
        And I swipe 'imageBackground-usa/canada' 'right' 'fast'
        Then I swipe 'imageBackground-usa/canada' 'left' 'slow' for 0.1 of the screen




