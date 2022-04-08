Feature: Create User Cypress

  I want to demo using BDD in Cypress
  
@Test1
  Scenario: Cypress check on User creation
    Given I open Demo HDFC Login page
    When I login as "sme_admin@hdfcre.com" user
    Then I should see User logged in