import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

//Navigate to URl
const url = 'https://hdfcrev2.id8lab.net/SmeAdm/Account/Login';


Given('I open Demo HDFC Login page', () => {
    cy.visit(url)
});


When("I login as {string} user", (username) => {
    cy.get('#email').type(username);
    cy.get('#pwd').type('Asd@123456');
    //  cy.get('#login-button').click();
});



Then('I should see User logged in', () => {
    cy.get('.btn').click()
});
/////////////////////////////////////scenario 2//////////////////////////////////////////
Given('I click User menu after login', () => {
    cy.visit(url)
    cy.get('#email').type('sme_admin@hdfcre.com');
    cy.get('#pwd').type('Asd@123456');
    cy.get('.btn').click()
    cy.get('.pl-10 > .card-block > .bg-white').click();
    cy.get(':nth-child(5) > .hover-righ-slide').click();
    cy.wait(1000)
   
});

When("I login as Scenario2 user", () => {
    cy.get('#txtFillName').type('test112')
    cy.get('#Email').type('saurabh112@id8labs.com')
    cy.get('#userPWD').type('Pass@1234#')
    cy.get('.checkbox > label').click()
    cy.get('.btn').click()

});

Then('I should see User logged in scenario2', () => {

    cy.log("the user is created")
});

