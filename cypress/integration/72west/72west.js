import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

//Navigate to URl
const url = 'https://www.ashwinshethgroup.com/projects/72-west/';


Given('User open 72west page', () => {
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
Given('User open 72west page', () => {
    cy.log("Url is opened by User")
    cy.intercept('POST', 'https://stats.g.doubleclick.net/j/collect?t=dc&aip=1&_r=3&v=1&_v=j96&tid=UA-168560036-1&cid=1552969096.1650273427&jid=1618300339&gjid=354442742&_gid=1035811010.1650273427&_u=YEBAAEAAAAAAAC~&z=1756400699', {})
    cy.intercept('POST', 'https://ia.icogz.com/api/collect', {})
    cy.intercept('GET', 'https://ia.icogz.com/api/collect', {})
    cy.intercept('GET', 'https://maps.googleapis.com/maps/api/mapsjs/**', {})
    cy.intercept('POST', 'https://maps.googleapis.com/maps/api/mapsjs/**', {})
    cy.visit(url)
});


When("User checks content on Page", () => {
    cy.log('Overview content check')
    //Overview content 
    cy.get('.single-portfolio-summary-meta-title').contains('OVERVIEW')
    cy.get('.project-title').contains('Where unrivalled lifestyle experiences and irresistible delights welcome you daily.')
    cy.get('.px-xl-3 > :nth-child(3)').contains('Ashwin Sheth Group merges the best in residential design, art and lifestyle into a single premium residence address - 72 West.')
    //Address
    cy.get('.elementor-element-a66ac98').contains('Address')
    cy.get('.elementor-element-53e1931 > .elementor-widget-container > .elementor-text-editor > p').contains('2, Yamuna Nagar Road, Yamuna Nagar,Andheri West, Mumbai, Maharashtra 400102.')


    ///location Highlights
    cy.get('.elementor-element-0e97cdf').contains('Location Highlights')
    cy.get(':nth-child(1) > .location-list-view > :nth-child(2) > i').contains('link road – 1.2 Kms')
    cy.get(':nth-child(2) > .location-list-view > :nth-child(2) > i').contains('JBCN International School,Andheri West – 650 Mtrs')
    cy.get(':nth-child(1) > .location-list-view > :nth-child(3) > i').contains('SV road – 2.2 Kms')
    cy.get(':nth-child(2) > .location-list-view > :nth-child(3) > i').contains('Billabong High International School,Andheri West – 3 Kms')
    cy.get(':nth-child(1) > .location-list-view > :nth-child(4) > i').contains('DN Nagar Metro Station - 2.7 Kms')
    cy.get(':nth-child(2) > .location-list-view > :nth-child(4) > i').contains('Echole Mondiale World SchoolJuhu – 4.9 Kms')
    cy.get(':nth-child(1) > .location-list-view > :nth-child(6) > i').contains('Domestic Airport – 9 Kms')
    cy.get(':nth-child(9) > i').contains('Kokilaben Hospital – 2.5 Kms')
    cy.get(':nth-child(1) > .location-list-view > :nth-child(10) > i').contains('Nanavati Hospital – 7 Kms')
    cy.get(':nth-child(2) > .location-list-view > :nth-child(6) > i').contains('JW Marriot, Juhu – 6 Kms')
    cy.get(':nth-child(2) > .location-list-view > :nth-child(7) > i').contains('Westine, Goregaon – 6.1 Kms')
    cy.get(':nth-child(8) > i').contains('ITC Maratha, Andheri East – 9 Kms')
    cy.get(':nth-child(2) > .location-list-view > :nth-child(10)').contains('Infinity Mall, Andheri West – 1 Kms')
    cy.get('.location-list-view > :nth-child(11)').contains('Inorbit Mall, Andheri West – 1.1 Kms')

    //RERA Details
    cy.get('.maharera-content').contains('MahaRERA Registration No : P51800028086')

    //FAQ's
    cy.get('.elementor-element-6485692 > .elementor-widget-container > .elementor-text-editor > p').contains('Common questions on 72 west')

    cy.get('#elementor-tab-title-2541').contains('What is 72 west and where is it located?')
    cy.get('#elementor-tab-content-2541 > :nth-child(1) > span').contains('Located at the heart of Andheri West, in the charming neighbourhood of Lokhandwala, 72 West is a residential property designed for elevated living.')

    cy.get('#elementor-tab-title-2542').contains('Is 72 West registered on RERA?')
    cy.get('#elementor-tab-content-2542 > :nth-child(1)').contains('Yes, 72 West is registered on RERA and the registration number is as follows:')

    cy.get('#elementor-tab-title-2543').contains('What are the different types of apartments and what are their sizes?')
    cy.get('#elementor-tab-content-2543 > p').contains('72 West, where unrivalled lifestyle experiences and irresistible delights welcome you on a daily basis, is a residential property with the following unit options:')

    cy.get('#elementor-tab-title-2544').contains('What are the amenities provided at 72 west?')
    cy.get('#elementor-tab-content-2544 > p').contains('Envisioned as an elite lifestyle destination, 72 West located in Andheri West, offers a multitude of indulging amenities:')


    cy.get('#elementor-tab-title-2545').contains('What is the construction status of 72 west?')
    cy.get('#elementor-tab-content-2545').contains('72 West, located in Lokhandwala Andheri West, is a residential project that is still under construction.')

    cy.get('#elementor-tab-title-2546').contains('Which bank can approve loans for 72 west?')
    cy.get('#elementor-tab-content-2546 > p').contains('If you are looking to invest in 72 West and wish to take a loan from the bank, you can approach any bank of your choice as each of them can approve loans for this spectacular property.')

    cy.get('#elementor-tab-title-2547').contains('What is the starting price of flats in 72 west?')
    cy.get('#elementor-tab-content-2547 > p').contains('Designed to impress you, 72 West has a number of unit options available that start from Rs. 2.60cr')

    cy.get('#elementor-tab-title-2548').contains('When is the possession of flats?')
    cy.get('#elementor-tab-content-2548 > p').contains('72 West will be available for possession by 2025.')

    cy.get('#elementor-tab-title-2549').contains('What are the benefits of buying a home in Andheri? ')
    cy.get('#elementor-tab-content-2549 > :nth-child(1)').contains('Andheri West, in Mumbai, is one such area that has 24X7 access to necessities like Healthcare and Education. Apart from that, the lifestyle and entertainment destinations in the locality ensure a convenient and elitist lifestyle.')

    cy.get('#elementor-tab-title-25410').contains('How is 72 west a dream destination for residential investments?')
    cy.get('#elementor-tab-content-25410 > :nth-child(1)').contains('Amidst the ever exciting neighbourhood of Lokhandwala and Andheri West, 72 West is the perfect residential property that enables you to live in your dream home.')

    cy.get('#elementor-tab-title-25411').contains('Why is 72 west the best place to invest in Andheri West?')
    cy.get('#elementor-tab-content-25411 > p').contains('If you are looking to make an investment in a residential property then 72 West is the right option for you. Here’s why:')

    cy.get('#elementor-tab-title-25412').contains('Which is the nearest landmark for 72 west ?')
    cy.get('#elementor-tab-content-25412 > p').contains('The nearest landmark for 72 West is Celebrations Club located 2 minutes away from the property.')


    cy.get('#elementor-tab-title-25413').contains('Is there any project of Ashwin Sheth Group in Andheri, Mumbai?')
    cy.get('#elementor-tab-content-25413 > p').contains('Yes, 72 West is a luxurious residential project that is currently being constructed in Andheri West, Mumbai.')


});

Then('User Content check complete', () => {
    cy.log("End of testing")
});