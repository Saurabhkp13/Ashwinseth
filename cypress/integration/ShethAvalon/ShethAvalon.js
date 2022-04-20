import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

//Navigate to URl
const url = 'https://www.ashwinshethgroup.com/projects/sheth-avalon-thane';


Given('User open ShethAvalon page', () => {
    cy.log("Test Started")
    cy.visit(url)
    cy.wait(2000)

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
Given('User open ShethAvalon page', () => {
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
    cy.wait(2000)
//Overview content 
    cy.get('.single-portfolio-summary-meta-title').contains('OVERVIEW')
    cy.get('.project-title').contains('Where Uber Luxurious Lifestyle and Convenience Converge.')
    cy.get('.px-xl-3 > :nth-child(3)').contains('Sheth Avalon is one of the new residential projects in Thane developed by Ashwin Sheth Group.')

//Address

cy.get('.elementor-element-c3fb9fc').contains('Address')
cy.get('.elementor-element-95e7faf > .elementor-widget-container > .elementor-text-editor > p').contains('Next to Jupiter Hospital, Thane’s Platinum Belt, Eastern Express Highway, Laxmi Nagar, Thane West, Maharashtra 400606.')


///Key Transport Highlights
cy.get('.elementor-element-79ba0c5').contains('Key Transport')
cy.get(':nth-child(1) > .location-list-view > :nth-child(1) > i').contains('Viviana Mall - 0.20 Km')
cy.get(':nth-child(1) > .location-list-view > :nth-child(2) > i').contains('Jupiter Hospital - 0.10 Km')
cy.get(':nth-child(1) > .location-list-view > :nth-child(3) > i').contains('Singhania School - 1.3 Km')
cy.get(':nth-child(1) > .location-list-view > :nth-child(4) > i').contains('Euro Kids - 2 Km')
cy.get(':nth-child(1) > .location-list-view > :nth-child(5) > i').contains('NKT Degree College - 2.7 Km')
cy.get(':nth-child(1) > .location-list-view > :nth-child(6) > i').contains('E.S.I.C. Hospital - 3 Km')


cy.get(':nth-child(2) > .location-list-view > :nth-child(1) > i').contains('Thane Railway Station - 3.9. Km')
cy.get(':nth-child(2) > .location-list-view > :nth-child(2) > i').contains('R Mall - 5 Km')
cy.get(':nth-child(2) > .location-list-view > :nth-child(3) > i').contains('Hiranandani Hospital - 5.6 Km')
cy.get(':nth-child(2) > .location-list-view > :nth-child(4) > i').contains('DAV International School - 2.3 Km')
cy.get(':nth-child(2) > .location-list-view > :nth-child(5) > i').contains('Hiranandani Foundation School - 6.5 Km')
cy.get(':nth-child(2) > .location-list-view > :nth-child(6) > i').contains('K.C. College of Engineering - 5 Km')


//RERA Details
cy.get(':nth-child(1) > .maharera-content').contains('Phase I – 2, 2.5, 3 & 4 BHK. MAHARERA No. P51700001729')
cy.get(':nth-child(2) > .maharera-content').contains('Phase II – 3, 4 & 5 BHK. MAHARERA No. P51700015517')

     //FAQ's
     cy.get('.elementor-element-29a5d34 > .elementor-widget-container > .elementor-text-editor > p').contains('Common questions on Sheth Avalon')
     

     cy.get('#elementor-tab-title-1131').contains('What is Sheth Avalon and where is it located?')
     cy.get('#elementor-tab-content-1131 > :nth-child(1)').contains('Sheth Avalon is an upcoming residential property located in Thane West. It is a story of luxury realized through superior design and functional planning.')

     cy.get('#elementor-tab-title-1132').contains('What are the different types of apartments and what are their sizes?')
     cy.get('#elementor-tab-content-1132 > p').contains('Sheth Avalon, a residential property that is the true meaning of luxurious comfort, has a number of unit options available that you can choose from based on your requirements')
     
     cy.get('#elementor-tab-title-1133').contains('What are the amenities provided at Sheth Avalon?')
     cy.get('#elementor-tab-content-1133 > p').contains('A part of Ebony club homes edition, this residential property is located in Thane West')

     cy.get('#elementor-tab-title-1134').contains('What is the construction status of Sheth Avalon?')
     cy.get('#elementor-tab-content-1134 > p').contains('Sheth Avalon is partially complete. Phase I of this uber luxurious property has been completed and has also received the OC but phase II is still under construction.')

     cy.get('#elementor-tab-title-1135').contains('What all property types are there in Sheth Avalon?')
     cy.get('#elementor-tab-content-1135 > :nth-child(1)').contains('Located in Thane West, along with wonderful amenities and excellent connectivity to the rest of the city, Sheth Avalon provides a number of unit options.')

     cy.get('#elementor-tab-title-1136').contains('Is there a 3D video or walkthrough for Sheth Avalon?')
     cy.get('#elementor-tab-content-1136 > p').contains('The team at Sheth Avalon has created a 3D video or walkthrough for the property to ensure that you have a visual tour to rely on for making the right decision.')

     cy.get('#elementor-tab-title-1137').contains('Is the sample flat of Sheth Avalon, Mumbai ready on-site?')
     cy.get('#elementor-tab-content-1137 > :nth-child(1)').contains('Yes, the show flat is ready. You can visit Sheth Avalon, located in Thane West, to get a better understanding of the project.')

     cy.get('#elementor-tab-title-1138').contains('What is the price of 3+ BHK in Sheth Avalon?')
     cy.get('#elementor-tab-content-1138 > p').contains('Sheth Avalon, located in Thane West, has two towers with different unit options for you to choose from namely, 3 BHK, 4 BHK, & 5 BHK. The starting price for these is 3.65 cr onwards.')

     cy.get('#elementor-tab-title-1139').contains('Are there any ready to move apartments in Thane (West)?')
     cy.get('#elementor-tab-content-1139 > :nth-child(1)').contains('An uber luxurious property, Sheth Avalon, located in Thane West, has ready to move apartments.')

     cy.get('#elementor-tab-title-11310').contains('What are the popular new residential projects in Thane (West)?')
     cy.get('#elementor-tab-content-11310 > p').contains('Thane West has seen significant growth in the past decade in terms of residential & commercial properties, connectivity, and lifestyle.')

     cy.get('#elementor-tab-title-11311').contains('What is the starting price of Sheth Avalon?')
     cy.get('#elementor-tab-content-11311 > p').contains('This is an upcoming residential property that is divided into two towers that have 3, 4, & 5 BHKs available.')

     cy.get('#elementor-tab-title-11312').contains('What is the price range of Sheth Avalon?')
     cy.get('#elementor-tab-content-11312 > p').contains('The apartment prices at Sheth Avalon range from 1.75 CR – 5.87 CR.')

















});

Then('User Content check complete', () => {
    cy.log("End of testing")
});