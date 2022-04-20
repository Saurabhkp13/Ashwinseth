import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

//Navigate to URl
const url = 'https://www.ashwinshethgroup.com/projects/sheth-montana-mulund';


Given('User open Montana page', () => {
    cy.log("Test Started")
    cy.visit(url)

});


When("User enter details user", () => {
    cy.log("Test Middle")
    cy.get('#your-name').type('Test User');
    cy.get('.elementor-column-wrap > .wpcf7-form-control-wrap > #your-email').type('test@gmail.com')
    cy.get('#phone-number').type(9123456789)
    cy.get(':nth-child(4) > .elementor-column-wrap > .wpcf7-form-control-wrap > .wpcf7-form-control').select('2 BHK')
   // cy.get('#product-submit').click()

});



Then('User to be shown Submitted Successfully Message', () => {
    cy.log("End of testing")
  //  cy.get('#wpcf7-f6013-p55-o2 > .wpcf7-form > .wpcf7-response-output').contains('Thank you for your interest. We will contact you shortly')

});

////////////////Scenario 2///////////////////////////
Given('User open Montana page', () => {
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
    cy.get('.project-title').contains('Where palatial residences and nature')
    cy.get('.px-xl-3 > :nth-child(3)').contains('Built to enchant you with the mesmerizing views of the mountains, is Sheth Montana, a new residential project in Mulund West jointly developed by Ashwin Sheth Group and Emami Group.')
    cy.wait(1000)
    cy.get('.sub-title').contains('Project')
    cy.get('.elementor-element-d3bcf30 > .elementor-widget-container > .elementor-heading-wrapper').contains('An understanding of Sheth Montana')
    cy.get('.elementor-element-b1d9ff8 > .elementor-widget-container > .elementor-text-editor > :nth-child(1)').contains('A visual glimpse of')
    cy.get('.elementor-element-b1d9ff8 > .elementor-widget-container > .elementor-text-editor > :nth-child(2)').contains('what Sheth Montana has to offer')
    cy.get('.elementor-element-d0a325e > .elementor-widget-container > .elementor-text-editor > p').contains('Get an understanding of how easy your life')

//Address

cy.get('.elementor-element-6153af0').contains('Address')
cy.get('.elementor-element-0ac71f7 > .elementor-widget-container > .elementor-text-editor > p').contains('Marathon Ave, Moti Nagar, Mulund Colony, Mulund West, Mumbai, Maharashtra 400080.')

///location Highlights
cy.get('.elementor-element-9abb09e').contains('Location Highlights')
cy.get(':nth-child(1) > .location-list-view > :nth-child(1) > i').contains('Eastern Express Highway – 3.5 Kms')
cy.get(':nth-child(2) > .location-list-view > :nth-child(1) > i').contains('Fortis Hospital – 1.5 Kms')
cy.get(':nth-child(1) > .location-list-view > :nth-child(2) > i').contains('JVLR – 6 Kms')
cy.get(':nth-child(2) > .location-list-view > :nth-child(2) > i').contains('E.S.I.S Hospital – 1.7 Kms')
cy.get(':nth-child(2) > .location-list-view > :nth-child(3) > i').contains('R Mall – 2.4 Kms')
cy.get(':nth-child(1) > .location-list-view > :nth-child(4) > i').contains('Billabong High International School – 2.6 Kms')
cy.get(':nth-child(2) > .location-list-view > :nth-child(4) > i').contains('Eternity Mall – 5 Kms')


//RERA Details

cy.get(':nth-child(1) > .maharera-content').contains('Phase I – 2 & 3 BHK. Maha RERA No. P51800000735')
cy.get(':nth-child(2) > .maharera-content').contains('Phase II – 3 & 4 BHK. Maha RERA No. P51800014539')
cy.get(':nth-child(3) > .maharera-content').contains('Phase III – 2 & 3 BHK. Maha RERA No. P51800017754')
cy.get(':nth-child(4) > .maharera-content').contains('Phase IV – Maha RERA No. P51800026393')

     //FAQ's
     cy.get('.elementor-element-ea8ac3f > .elementor-widget-container > .elementor-text-editor > p').contains('Common questions on Sheth Montana')
     cy.get('#elementor-tab-title-2051').contains('Are there any ready to move apartments in Mulund (West)?')
     cy.get('#elementor-tab-content-2051 > p').contains('Sheth Montana, Ashwin Sheth Group’s marvel project in the Central Suburbs, is currently under construction but one of its towers, Rosa, has ready to move apartments. ')

     cy.get('#elementor-tab-title-2052').contains('What are the key Highlights of Sheth Montana?')
     cy.get('#elementor-tab-content-2052> p').contains('Sheth Montana, a property located in Mulund West with a spectacular view of Yogi Hills facilitates a luxurious and convenient life. It is an oasis designed to take you away from the hustle and bustle of the city where you can wake up to fresh airy mornings, bask in the lush greenery and enjoy all the modern amenities of a world class standard.')

     cy.get('#elementor-tab-title-2053').contains('Where is Sheth Montana located?')
     cy.get('#elementor-tab-content-2053 > p').contains('Sheth Montana is located in a well connected and favourable location, off LBS Marg in Mulund West, also known as the queen of the Suburbs. In the recent past, the MMR region has experienced considerable growth in terms of residential properties.')

     cy.get('#elementor-tab-title-2054').contains('What are the nearest transit options available for the Sheth Montana project at Mulund, Mumbai?')
     cy.get('#elementor-tab-content-2054 > p').contains('Built to enchant you with mesmerizing views, Sheth Montana located in Mulund West, cradles you in nature’s arms while also enabling you to experience the city’s hustle bustle.')

     cy.get('#elementor-tab-title-2055').contains('What is the price range of Sheth Montana?')
     cy.get('#elementor-tab-content-2055 > p').contains('The starting price of apartments in Sheth Montana is Rs 1.38 CR. ')


     cy.get('#elementor-tab-title-2056').contains('What is the construction status of Sheth Montana?')
     cy.get('#elementor-tab-content-2056 > p').contains('Sheth Montana is currently under construction. One of its towers, Rosa, has reached completion and is ready to be occupied.')


     cy.get('#elementor-tab-title-2057').contains('How much is the area of 2 BHK in Sheth Montana, Mumbai?')
     cy.get('#elementor-tab-content-2057 > p').contains('This property, spread across 7 acres of land parcels, houses 2 BHK units of the following square footage:')

     cy.get('#elementor-tab-title-2058').contains('Is the sample flat of Sheth Montana, Mumbai ready on-site?')
     cy.get('#elementor-tab-content-2058 > p').contains('Yes, the show flat at Sheth Montana is ready to view on-site.')

     cy.get('#elementor-tab-title-2059').contains('Is Sheth Montana RERA Registered?')
     cy.get('#elementor-tab-content-2059 > :nth-child(1)').contains('Yes, Sheth Montana has been RERA registered. Following are the phase wise Maha RERA registration numbers:')


    

});

Then('User Content check complete', () => {
    cy.log("End of testing")
});