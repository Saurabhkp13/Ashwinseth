import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

//Navigate to URl
const url = 'https://www.ashwinshethgroup.com/projects/sheth-midori-dahisar-east';


Given('User open Midori page', () => {
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

////////////////Scenario 2/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Given('User open Midori page', () => {
    cy.log("Url is opened by User")

    cy.visit(url)
    cy.intercept('POST', 'https://stats.g.doubleclick.net/j/collect?t=dc&aip=1&_r=3&v=1&_v=j96&tid=UA-168560036-1&cid=1552969096.1650273427&jid=1618300339&gjid=354442742&_gid=1035811010.1650273427&_u=YEBAAEAAAAAAAC~&z=1756400699', {})
    cy.intercept('POST', 'https://ia.icogz.com/api/collect', {})
    cy.intercept('GET', 'https://ia.icogz.com/api/collect', {})
    cy.intercept('GET', 'https://maps.googleapis.com/maps/api/mapsjs/**', {})
    cy.intercept('POST', 'https://maps.googleapis.com/maps/api/mapsjs/**', {})
});

//Overview content
When("User checks content on Page", () => {
    cy.log('Overview content check')
    cy.get('.project-title').contains('Where location, scenic views and quality living converge.')
    cy.get('.px-xl-3 > :nth-child(3)').contains('On the edge of Sanjay Gandhi National Park nestles Sheth Midori offering exquisite 1.5 and 2 BHK flats in Dahisar designed by the Ashwin Sheth Group as well as a generous palette of green to feast on.')


    //Address
    cy.get('.elementor-element-27655b0').contains('Address')
    cy.get('.elementor-element-e6ce014 > .elementor-widget-container > .elementor-text-editor > p').contains('Sheth Midori, Hanuman Tekdi, Ashokvan, Dahisar East.')

    ///location Highlights
    cy.get('.elementor-element-6c898d5').contains('Location Highlights')
    cy.get(':nth-child(1) > .location-list-view > :nth-child(1)').contains('Dahisar Railway Station – 1.25 Km')
    cy.get(':nth-child(1) > .location-list-view > :nth-child(2) > i').contains('Borivali Railway Station – 2.5 Km')
    cy.get(':nth-child(1) > .location-list-view > :nth-child(3) > i').contains('Western Express Highway – 0.5 Km')
    cy.get(':nth-child(1) > .location-list-view > :nth-child(4) > i').contains('Ghodbunder Road – 3 Kms')
    cy.get(':nth-child(1) > .location-list-view > :nth-child(5) > i').contains('Hospitals & Clinics – 2-3 Km Radius')
    cy.get(':nth-child(2) > .location-list-view > :nth-child(2) > i').contains('Colleges - 2-10 Km Radius')
    cy.get(':nth-child(2) > .location-list-view > :nth-child(3) > i').contains('Temples - 2-5 Km Radius')
    cy.get(':nth-child(2) > .location-list-view > :nth-child(4) > i').contains('Banks & ATMs - 2-3 Km Radius')
    cy.get(':nth-child(2) > .location-list-view > :nth-child(5) > i').contains('Domestic Airport – 15 Kms')
    cy.get(':nth-child(6) > i').contains('Theatres & Shopping Centres - 2-10 Km Radius')

    //RERA Details
    cy.get('.maharera-content').contains('MAHARERA No. P51800000882')

    //FAQ's
    cy.get('.elementor-element-2bde5f2 > .elementor-widget-container > .elementor-text-editor > p').contains('Common questions on Sheth Midori')
    
    cy.get('#elementor-tab-title-1631').contains('What is Sheth Midori and where is it located?')
    cy.get('#elementor-tab-content-1631 > :nth-child(1) > span').contains('Nestled on the edge of Sanjay Gandhi National Park, Sheth Midori is a residential property offering exquisite 1.5 and 2 BHK flats in Dahisar East.')

    cy.get('#elementor-tab-title-1632').contains('Is Sheth Midori registered on RERA?')
    cy.get('#elementor-tab-content-1632 > :nth-child(1)').contains('Yes, Sheth Midori is registered on RERA and the registration number is as follows:')

    cy.get('#elementor-tab-title-1633').contains('What are the different types of apartment and what are their sizes?')
    cy.get('#elementor-tab-content-1633 > :nth-child(1)').contains('A convergence of the best of both the worlds, Sheth Midori offers its residents two property types including:')

    cy.get('#elementor-tab-title-1634').contains('What are the amenities provided at Sheth Midori?')
    cy.get('#elementor-tab-content-1634 > p').contains('Infused with modern living spaces, entertainment centre, manicured gardens and much more, Sheth Midori offers a unique living experience that is not just confined to the surrounding greenery but the following host of exceptional amenities too:')

    cy.get('#elementor-tab-title-1635').contains('What is the construction status of Sheth Midori?')
    cy.get('#elementor-tab-content-1635 > p').contains('Sheth Midori, located in Dahisar East, is a residential project that is still under construction.')

    cy.get('#elementor-tab-title-1636').contains('Which bank can approve loans for Sheth Midori?')
    cy.get('#elementor-tab-content-1636 > p').contains('If you are looking to invest in Sheth Midori and wish to take a loan from the bank, you can approach any bank of your choice as each of them can make a sanction for this spectacular property')


    cy.get('#elementor-tab-title-1637').contains('What is the starting price of flats in Sheth Midori?')
    cy.get('#elementor-tab-content-1637 > p').contains('Sheth Midori, primed to fill your soul with happiness, houses 2 BHK flats that are priced starting from 1.28 CR')

    cy.get('#elementor-tab-title-1638').contains('What are the benefits of buying a home in Dahisar?')
    cy.get('#elementor-tab-content-1638 > :nth-child(1)').contains('You will experience a perfect blend of tranquillity, comfort and adventure while residing in Dahisar East')

    cy.get('#elementor-tab-title-1639').contains('Which is the nearest landmark for Sheth Midori ?')
    cy.get('#elementor-tab-content-1639 > p').contains('Nestled on the edge of Sanjay Gandhi National Park')

    cy.get('#elementor-tab-title-16310').contains('Where is Sheth Midori located?')
    cy.get('#elementor-tab-content-16310').contains('Close to the city and closer to the hills, Sheth Midori, a modern residential property is located in Dahisar East.')

    cy.get('#elementor-tab-title-16311').contains('Is there any project of Ashwin Sheth Group in Dahisar, Mumbai?')
    cy.get('#elementor-tab-content-16311 > p').contains('Yes, a residential property, Sheth Midori, by Ashwin Sheth Group is located in Dahisar East.')

    cy.get('#elementor-tab-title-16312').contains('Is the sample flat of Sheth Midori, Mumbai ready on-site?')
    cy.get('#elementor-tab-content-16312 > :nth-child(1)').contains('Yes, the show flat for Sheth Midori is ready to visit. You can book an appointment by getting in touch with our sales team on:')


});

Then('User Content check complete', () => {
    cy.log("End of testing")
});