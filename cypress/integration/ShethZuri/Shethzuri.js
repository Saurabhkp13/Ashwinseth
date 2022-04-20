import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

//Navigate to URl
const url = 'https://www.ashwinshethgroup.com/projects/sheth-zuri-thane';


Given('User open ShethZuri page', () => {
    cy.log("Test Started")
    cy.visit(url)

});


When("User enter details user", () => {
    cy.log("Test Middle")
    cy.get('#your-name').type('Test User');
    cy.get('.elementor-column-wrap > .wpcf7-form-control-wrap > #your-email').type('test@gmail.com')
    cy.get('#phone-number').type(9123456789)
    //cy.get(':nth-child(4) > .elementor-column-wrap > .wpcf7-form-control-wrap > .wpcf7-form-control').select('2 BHK')
   // cy.get('#product-submit').click()

});



Then('User to be shown Submitted Successfully Message', () => {
    cy.log("End of testing")
  //  cy.get('#wpcf7-f6013-p55-o2 > .wpcf7-form > .wpcf7-response-output').contains('Thank you for your interest. We will contact you shortly')

});

////////////////Scenario 2///////////////////////////
Given('User open ShethZuri page', () => {
    cy.log("Url is opened by User")
    cy.intercept('POST', 'https://stats.g.doubleclick.net/j/collect?t=dc&aip=1&_r=3&v=1&_v=j96&tid=UA-168560036-1&cid=1552969096.1650273427&jid=1618300339&gjid=354442742&_gid=1035811010.1650273427&_u=YEBAAEAAAAAAAC~&z=1756400699',{})
    cy.intercept('POST', 'https://ia.icogz.com/api/collect', {})
    cy.intercept('GET','https://ia.icogz.com/api/collect',{})
    cy.intercept('GET','https://maps.googleapis.com/maps/api/mapsjs/**', {})
    cy.intercept('POST', 'https://maps.googleapis.com/maps/api/mapsjs/**', {})  
    cy.visit(url)
});


When("User checks content on Page", () => {
    cy.log('Overview content check')
//Overview content 
    cy.get('.single-portfolio-summary-meta-title').contains('OVERVIEW')
    cy.get('.px-xl-3 > :nth-child(3)').contains('Sheth Zuri by Ashwin Sheth Group is a strategically located new residential project in Thane')
    
  
//Address
cy.get('.elementor-element-0931935').contains('Address')
cy.get('.elementor-element-ec93dd8 > .elementor-widget-container > .elementor-text-editor > p').contains('Besides Viviana Mall, Thane’s Platinum Belt, Eastern Express Highway, Thane West 400606.')

///location Highlights
cy.get(':nth-child(1) > .location-list-view > :nth-child(1) > i').contains('Viviana Mall – 0.02 Kms')
cy.get(':nth-child(1) > .location-list-view > :nth-child(2) > i').contains('Jupiter Hospital – 0.20 Kms')
cy.get(':nth-child(1) > .location-list-view > :nth-child(3) > i').contains('Korum Mall – 1.00 Kms')
cy.get(':nth-child(1) > .location-list-view > :nth-child(4) > i').contains('Singhania School – 1.00 Kms')
cy.get(':nth-child(1) > .location-list-view > :nth-child(5) > i').contains('Hiranandani Foundation School – 1.00 Kms')
cy.get(':nth-child(6) > i').contains('Euro Kids – 2.07 Kms')

cy.get(':nth-child(2) > .location-list-view > :nth-child(1) > i').contains('E.S.I.C. Hospital – 2.04 Kms')
cy.get(':nth-child(2) > .location-list-view > :nth-child(2) > i').contains('K.C. College of Engineering – 5.07 Kms')
cy.get(':nth-child(2) > .location-list-view > :nth-child(3) > i').contains('R Mall – 4.01 Kms')
cy.get(':nth-child(2) > .location-list-view > :nth-child(4) > i').contains('Hiranandani Hospital – 5.07 Kms')
cy.get(':nth-child(2) > .location-list-view > :nth-child(5) > i').contains('Hypercity – 6.05 Kms')

//RERA Details
cy.get('.maharera-content').contains('MAHARERA No : P51700007274')

//FAQ's.
cy.get('#elementor-tab-title-2301').contains('How many flats are available for sale in Sheth Zuri?')
cy.get('#elementor-tab-content-2301 > :nth-child(1) > span').contains('Sheth Zuri is a new residential project in Thane West that has a total of 99 units for sale. ')


cy.get('#elementor-tab-title-2302').contains('What property types are there In Sheth Zuri?')
cy.get('#elementor-tab-content-2302 > p').contains('Sheth Zuri, an upcoming residential project has a total of 3 towers with 33 floors each that house the following property types:')

cy.get('#elementor-tab-title-2303').contains('What is the possession status of Sheth Zuri?')
cy.get('#elementor-tab-content-2303').contains('Sheth Zuri is an upcoming project located in Thane West that is still under construction.')


cy.get('#elementor-tab-title-2304').contains('In which area is Sheth Zuri located?')
cy.get('#elementor-tab-content-2304 > :nth-child(1)').contains('Sheth Zuri is a strategically located new residential project in Thane West, where the city’s every privilege is easily accessible to you.')


cy.get('#elementor-tab-title-2305').contains('What is the process of buying a property in Sheth Zuri?')
cy.get('#elementor-tab-content-2305 > :nth-child(1)').contains('With 3 aesthetically planned towers, Sheth Zuri is still under construction but the units are available for purchase. To experience a glimpse of the life at this property, you can visit the show flat.')

cy.get('#elementor-tab-title-2306').contains('Is Sheth Zuri RERA Registered? If Yes, What is the RERA Registration No. of Sheth Zuri?')
cy.get('#elementor-tab-content-2306 > :nth-child(2)').contains('P51700007274')

cy.get('#elementor-tab-title-2307').contains('What are the key amenities of Sheth Zuri?')
cy.get('#elementor-tab-content-2307 > p').contains('Sheth Zuri, a property that is positioned to elevate your lifestyle, houses exceptional indoor and outdoor activities with a wide variety of amenities.')

cy.get('#elementor-tab-title-2308').contains('Is there a 3D video or walkthrough for Sheth Zuri?')
cy.get('#elementor-tab-content-2308 > p').contains('The team at Sheth Zuri has created a 3D video or walkthrough for the property to ensure that you have a visual tour to rely on for making the right decision')

cy.get('#elementor-tab-title-2309').contains('What is the current availability in Sheth Zuri?')
cy.get('#elementor-tab-content-2309 > :nth-child(1)').contains('Sheth Zuri has three unit options for you to choose from:')


cy.get('#elementor-tab-title-23010').contains('What are the construction updates of Sheth Zuri, Mumbai?')
cy.get('#elementor-tab-content-23010 > :nth-child(1)').contains('Sheth Zuri is a residential project that is still under construction at the moment. Here are the tower wise updates:')

cy.get('#elementor-tab-title-23011').contains('What is the carpet area of all configurations in this project?')
cy.get('#elementor-tab-content-23011 > :nth-child(1)').contains('The property has multiple modern living options designed to create a lasting impression.')

});

Then('User Content check complete', () => {
    cy.log("End of testing")
});