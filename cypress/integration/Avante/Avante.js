import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

//Navigate to URl
const url = 'https://www.ashwinshethgroup.com/projects/sheth-avante-kanjurmarg';


Given('User open Avante page', () => {
    cy.log("Test Started")
    cy.visit(url)

});


When("User enter details user", () => {
    cy.log("Test Middle")
  //  cy.get('#your-name').type('Test User');
 //   cy.get('.elementor-column-wrap > .wpcf7-form-control-wrap > #your-email').type('test@gmail.com')
//    cy.get('#phone-number').type(9123456789)
  //  cy.get(':nth-child(4) > .elementor-column-wrap > .wpcf7-form-control-wrap > .wpcf7-form-control').select('1 BHK')
 //   cy.get('#product-submit').click()
});



Then('User to be shown Submitted Successfully Message', () => {
    cy.log("End of testing")
  //  cy.get('#wpcf7-f6013-p55-o2 > .wpcf7-form > .wpcf7-response-output').contains('Thank you for your interest. We will contact you shortly')

});

////////////////Scenario 2///////////////////////////
Given('User open Avante page', () => {
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
    cy.get('.project-title').contains('Where the finest living meets effortless connectivity.')
    cy.get('.px-xl-3 > :nth-child(3)').contains('From seamless connectivity to any corner of the city to experiencing the uber-luxury lifestyle you have always aspired for')
    cy.get('.elementor-element-9d00ede > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-text-editor > p').contains('Experience the true meaning of living')
    cy.get('.elementor-element-db8bc80').contains('An understanding of Avant')

    cy.log('check Address Section')
    cy.get('.elementor-element-b917d80').contains('Address')
    cy.get('.elementor-element-597f81f > .elementor-widget-container > .elementor-text-editor > p').contains('Next to D-Mart, LBS Road, Kanjurmarg West. Mumbai-400078.')

    cy.log('Check location contents')
    cy.get('.elementor-element-ff99f43').contains('Location Highlights')
    cy.get(':nth-child(1) > .location-list-view > :nth-child(1) > i').contains('Eastern Express Highway – 5 minutes away')
    cy.get(':nth-child(2) > .location-list-view > :nth-child(1) > i').contains('SEEPZ – 15 minutes away')
    cy.get(':nth-child(1) > .location-list-view > :nth-child(2) > i').contains('Kanjurmarg Station – 5 minutes away')
    cy.get(':nth-child(2) > .location-list-view > :nth-child(2)').contains('BKC – 20 minutes away')
    cy.get(':nth-child(1) > .location-list-view > :nth-child(3) > i').contains('Ghatkopar Metro Station – 20 minutes away')
    cy.get(':nth-child(2) > .location-list-view > :nth-child(3) > i').contains('D-Mart – 2 minutes away')
    cy.get(':nth-child(1) > .location-list-view > :nth-child(4) > i').contains('St. Xaviers – 5 minutes away')
    cy.get(':nth-child(2) > .location-list-view > :nth-child(4) > i').contains('R City Mall – 15 minutes away')
    cy.get(':nth-child(1) > .location-list-view > :nth-child(5) > i').contains('Hiranandani School – 14 minutes away')
    cy.get(':nth-child(2) > .location-list-view > :nth-child(5) > i').contains('Fortis Hospital – 15 minutes')
    cy.get(':nth-child(1) > .location-list-view > :nth-child(6) > i').contains('Powai – 5 minutes away')
    cy.get(':nth-child(2) > .location-list-view > :nth-child(6) > i').contains('Airport – 30 minutes')
    cy.get('.maharera-content').contains('MAHARERA No. P51800001140')
     //FAQ's

    cy.get('.elementor-element-ab39ce4 > .elementor-widget-container > .elementor-text-editor').contains('Common questions on Avant')
    cy.log('FAQ Questions')
    cy.get('#elementor-tab-title-7471').contains('What is Sheth Avante and where is it located?')
    cy.get('#elementor-tab-content-7471 > :nth-child(1) > span').contains('Sheth Avantè is a residential property located in the heart of Kanjurmarg West on LBS Marg')
    
    cy.get('#elementor-tab-title-7472').contains('What are the different types of Apartments and what are their sizes?')
    cy.get('#elementor-tab-content-7472 > p').contains('Sheth Avante, located in a well connected area of Kanjurmarg West, has a total of 3 towers where wing A consists of 25 floors while Wings B & C consist of 24 floors each.')

    cy.get('#elementor-tab-title-7473').contains('What are the amenities provided at Sheth Avante?')
    cy.get('#elementor-tab-content-7473 > :nth-child(1)').contains('Experience the true meaning of living life at Sheth Avante, located in Kanjurmarg, with a wide variety of amenities that are absolutely state of the art.')

    cy.get('#elementor-tab-title-7474').contains('What is the construction status of Sheth Avante?')
    cy.get('#elementor-tab-content-7474 > :nth-child(1)').contains('Sheth Avenue, a residential property by Ashwin Sheth Group, is located in the heart of Kanjurmarg, right on LBS Marg. This luxurious project is still under construction but has begun with responding to enquiries and accepting bookings.')

    cy.get('#elementor-tab-title-7475').contains('What is the starting price of Flats in Sheth Avante?')
    cy.get('#elementor-tab-content-7475 > p').contains('The starting range of apartments in Sheth Avante is 1.17 cr.')

    cy.get('#elementor-tab-title-7476').contains('What are the benefits of buying a home in Kanjurmarg?')
    cy.get('#elementor-tab-content-7476 > p').contains('Today, Kanjurmarg is an upcoming residential area located in the Mumbai suburb region.')

    cy.get('#elementor-tab-title-7477').contains('Which is the nearest landmark for Sheth Avante ?')
    cy.get('#elementor-tab-content-7477 > p').contains('This residential property is located near DMart in Kanjur')

    cy.get('#elementor-tab-title-7478').contains('What unit options are available in Sheth Avante?')
    cy.get('#elementor-tab-content-7478 > p').contains('Sheth Avante’s unit options are as follows:')

    cy.get('#elementor-tab-title-7479').contains('What is the possession date of Sheth Avante?')
    cy.get('#elementor-tab-content-7479 > p').contains('Sheth Avante- Where the finest living meets effortless connectivity- is currently under construction and will reach completion by the year 2023.')

    cy.get('#elementor-tab-title-74710').contains('Is there any project of Ashwin Sheth Group in Kanjurmarg, Mumbai?')
    cy.get('#elementor-tab-content-74710 > p').contains('Kanjurmarg is a developing residential hub that is swiftly catching the eyes of real estate investors and homebuyers.')

    cy.get('#elementor-tab-title-74711').contains('Why to invest in Kanjurmarg?')
    cy.get('#elementor-tab-content-74711 > p').contains('Kanjurmarg, a developing locality in the eastern suburbs of Mumbai that has witnessed immense growth in terms of real estate and housing, lifestyle, connectivity, and convenience. ')


    cy.get('#elementor-tab-title-74712').contains('Is Sheth Avante RERA registered?')
    cy.get('#elementor-tab-content-74712 > p').contains('Yes, Sheth Avante is RERA registered. The registration number for the upcoming residential property is MAHARERA No. P51800001140.')

    cy.get('#elementor-tab-title-74713').contains('Which bank can approve loans for Sheth Avante?')
    cy.get('#elementor-tab-content-74713 > p').contains('If you are looking to invest in Sheth Avante and wish to take a loan from the bank, you can approach any bank of your choice as each of them can approve loans for this spectacular property.')

});



Then('User Content check complete', () => {
    cy.log("End of testing")
});