Feature: Detox with animations

Detox can work around animations

@synchronization @animation
Scenario: I navigate to the Animation screen and toggle the switch
Given I tap on the 'Animation' Home section
When I toggle the animation's switch
And I tap the back button
Then the Home page is correctly displayed