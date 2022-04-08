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


//Get list of children and assert its length
Then('I should see User logged in', () => {
  cy.get('.btn').click()
  });