Feature: Ashwinseth 72 west Automation Testing

 Enquiry and Content check in Ashwinseth
  
@Test1
  Scenario: User Enquiry form Submit check on 72west
    Given User open 72west page
    When User enter details user
    Then User to be shown Submitted Successfully Message

@Test2
  Scenario: User Content check on 72west
    Given User open 72west page
    When User checks content on Page
    Then User Content check complete 