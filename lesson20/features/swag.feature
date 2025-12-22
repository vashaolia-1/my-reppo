Feature: Swag Tests

  Background:
    Given The user is on the login page

  Scenario: Successful login
    When The user fills in with username and password with next data
      | username | standard_user |
      | password | secret_sauce  |
    And The user clicks the login button
    Then The user should see the products page

  Scenario: Unsuccessful login with invalid credentials
    When The user fills in with username and password with next data
      | username | locked_out_user |
      | password | secret_sauce  |
    And The user clicks the login button
    Then The user should see an error message "Epic sadface: Sorry, this user has been locked out."

  Scenario: Add a product
    When The user fills in with username and password with next data
      | username | standard_user |
      | password | secret_sauce  |
    And The user clicks the login button
    And The user adds the first product to the cart
    And The user goes to the cart
    Then The user should see the product in the cart

  Scenario: Verufy burger menu items
    When The user fills in with username and password with next data
      | username | standard_user |
      | password | secret_sauce  |
    And The user clicks the login button
    And The user opens the burger menu
    Then The burger menu should contain the following items:
      | All Items       |
      | About           |
      | Logout          |
      | Reset App State |

  Scenario: Logout from the application
    When The user fills in with username and password with next data
      | username | visual_user |
      | password | secret_sauce  |
    And The user clicks the login button
    And The user opens the burger menu
    And The user clicks the logout button
    Then The user should see the login page
