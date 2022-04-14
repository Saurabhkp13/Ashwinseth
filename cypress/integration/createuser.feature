Feature: Demo on User creation

 User creation in HDFC
  
@Test1
  Scenario: Logging into HDFC Site
    Given I open Demo HDFC Login page
    When I login as "sme_admin@hdfcre.com" user
    Then I should see User logged in

@Test2
  Scenario: Create User HDFC Site
    Given I click User menu after login
    When I login as Scenario2 user
    Then I should see User logged in scenario2
