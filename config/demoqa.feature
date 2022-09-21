Feature: Verifying features for demoqa.com


  @LoginPage
  Scenario Outline: To verify Login Page function
    Given I am in the login page 'https://demoqa.com/login'
    When I enter UserName "<UserName>"
    Then I enter Password "<Password>"
    And I click on Login button
    Then I should be on the profile page
    And I verify the title on the profile page "<Title>"

    Examples: 
      | UserName     | Password     | Title   |
      | demoqaname12 | Demoqaabc@-1 | ToolsQA |

 