import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

//Navigate to URl
const url = 'https://www.ashwinshethgroup.com/projects/sheth-cnergy-thane';


Given('User open ShethCnergy page', () => {
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
Given('User open ShethCnergy page', () => {
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
    cy.get('.project-title').contains('Commercial property in Thane designed to empower your business growth.')
    cy.get('.px-xl-3 > :nth-child(3)').contains('Designed as an ultra-modern business centre, Sheth Cnergy Thane by')


    //Address
    cy.get('.elementor-element-0c595af').contains('Address')
    cy.get('.elementor-element-2d1d4b5 > .elementor-widget-container > .elementor-text-editor')


    ///location Highlights
    cy.get('.elementor-element-487bfad').contains('Location Highlights')
    cy.get(':nth-child(1) > .location-list-view > :nth-child(1) > i').contains('Viviana Mall – 0.20 Km')
    cy.get(':nth-child(1) > .location-list-view > :nth-child(2) > i').contains('Jupiter Hospital – 0.10 Km')
    cy.get(':nth-child(1) > .location-list-view > :nth-child(3) > i').contains('Korum Mall – 1.6 Km')
    cy.get(':nth-child(1) > .location-list-view > :nth-child(4) > i').contains('R Mall – 2.6 Km')
    cy.get(':nth-child(1) > .location-list-view > :nth-child(5) > i').contains('Wagle Estate – 4.3 Km')

    cy.get(':nth-child(2) > .location-list-view > :nth-child(1) > i').contains('TCS Olympus – 6.8 Km')
    cy.get(':nth-child(2) > .location-list-view > :nth-child(2) > i').contains('Powai – 17.8 Km')
    cy.get(':nth-child(2) > .location-list-view > :nth-child(3) > i').contains('BKC – 26.6 Km')
    cy.get(':nth-child(2) > .location-list-view > :nth-child(4) > i').contains('International Airport – 23.2 Km')
    cy.get(':nth-child(2) > .location-list-view > :nth-child(5) > i').contains('Navi Mumbai International Airport – 30.6 Km')


    //RERA Details
    cy.get('.maharera-content').contains('MAHARERA No. P51700023047')

    //FAQ's
    cy.get('.elementor-element-3d69e71 > .elementor-widget-container > .elementor-text-editor > p').contains('Common questions on Sheth Cnergy')

    cy.get('#elementor-tab-title-1221').contains('What is the possession date of Sheth Cnergy?')
    cy.get('#elementor-tab-content-1221 > p > span').contains('Sheth Cnergy will be available for possession by December 2023.')

    cy.get('#elementor-tab-title-1222').contains('Where is Project Sheth Cnergy located?')
    cy.get('#elementor-tab-content-1222 > :nth-child(1)').contains('Sheth Cnergy is located in Thane West, an area that has witnessed massive development in the past decade')

    cy.get('#elementor-tab-title-1223').contains('What is the commercial office space size in Sheth Cnergy?')
    cy.get('#elementor-tab-content-1223 > p').contains('Sheth Cnergy, a commercial property in Thane, has a number of unit options to choose from:')

    cy.get('#elementor-tab-title-1224').contains('What is the USP of Sheth Cnergy?')
    cy.get('#elementor-tab-content-1224 > :nth-child(1)').contains('Sheth Cnergy, located in Thane, is a commercial property that is intelligently designed and equipped with technologically driven facilities.')

    cy.get('#elementor-tab-title-1225').contains('How can I check the RERA approval of Sheth Cnergy?')
    cy.get('#elementor-tab-content-1225 > p').contains('Sheth Cnergy has received its RERA approval. The MAHARERA No. of the property is P51700023047.')


    cy.get('#elementor-tab-title-1226').contains('What is the construction status of Sheth Cnergy?')
    cy.get('#elementor-tab-content-1226 > p').contains('Sheth Cnergy, a commercial property in Thane, is currently under construction and will be available for possession by December 2023.')

    cy.get('#elementor-tab-title-1227').contains('What all property types are there in the project?')
    cy.get('#elementor-tab-content-1227 > p').contains('Sheth Cnergy, provides the following property sizes that you can choose from based on your requirement:')


    cy.get('#elementor-tab-title-1228').contains('Is Sheth Cnergy in a good location?')
    cy.get('#elementor-tab-content-1228 > p').contains('Sheth Cnergy is an upcoming commercial property that is located in Thane West.')


    cy.get('#elementor-tab-title-1229').contains('Why should I invest in a commercial property?')
    cy.get('#elementor-tab-content-1229 > p').contains('If you are looking for a commercial space for your company then Sheth Cnergy is a great option for you. Investing in a commercial property gives you and your employees an office space that they can call their own.')

    cy.get('#elementor-tab-title-12210').contains('the best commercial property for sale in Mumbai?')
    cy.get('#elementor-tab-content-12210 > :nth-child(1)').contains('If you are looking to invest in a commercial property then you should definitely consider Sheth Cnergy.')
    cy.get('#elementor-tab-title-12211').contains('How can I buy commercial property in India? Is it safe?')
    cy.get('#elementor-tab-content-12211 > :nth-child(1)').contains('The commercial property market in India is currently booming and hence, is safe to make an investment in this sector.')
    cy.get('#elementor-tab-title-12212').contains('Can Commercial Property in India be purchased by an NRI?')
    cy.get('#elementor-tab-content-12212 > :nth-child(1)').contains('As an NRI, you do not require any special permissions to purchase a residential or commercial property in India')

    cy.get('#elementor-tab-title-12213').contains('Should NRIs invest in commercial properties in India?')
    cy.get('#elementor-tab-content-12213 > :nth-child(1)').contains('When an NRI invests in a commercial property in India, they receive higher returns as compared to the investments in residential properties.')

});

Then('User Content check complete', () => {
    cy.log("End of testing")
});