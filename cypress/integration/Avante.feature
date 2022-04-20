Feature: Ashwinseth Avante Automation Testing

  Enquiry and Content check in Ashwinseth
  
@Test1
  Scenario: User Enquiry form Submit check on Avante
    Given User open Avante page
    When User enter details user
    Then User to be shown Submitted Successfully Message

@Test2
  Scenario: User Content check on Avante
    Given User open Avante page
    When User checks content on Page
    Then User Content check complete
