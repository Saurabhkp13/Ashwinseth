/// <reference types="Cypress" />
import rgbHex from 'rgb-hex';


describe("Test Contact Us form on HomePage", () => {
  it("Should be able to submit a successful submission via contact us form", function () {
    //cypress code
    cy.visit(Cypress.env('url'))
    cy.get('.fixed-button > img').click()
    cy.get('#first_name').type(this.testdata.Firstname)
    cy.get('#last_name').type(this.testdata.Lastname)
    cy.get(':nth-child(6) > .wpcf7-form-control-wrap > #email').type(this.testdata.Email)
    cy.get('#phone').type(this.testdata.phone)
    cy.get('#select_type').select(this.testdata.Type)
    cy.get('#MainSelectCountry').select(this.testdata.Country)
    cy.get('#MainSelectState').select(this.testdata.State)
    cy.get('#MainSelectCity').select(this.testdata.City)
    cy.wait(3000)
    cy.get('#message').type('new')
    cy.get('#my-id > .uk-modal-dialog > .uk-modal-close-outside > svg').click()
    cy.wait(2000)

  });


  it.skip('Should Check for content Homepage', () => {
    cy.visit(Cypress.env('url'))
    cy.get('h4').should('include.text', 'We provide semi-automatic and fully automatic parking solutions')
    cy.get('h4').should('include.text', 'Our Parking Solutions')
    cy.log('Content is Present')

  })



  it.skip('Should Check and find Colours on page', () => {
    cy.get('[class=hamburger-menu-mobile]').invoke('css', 'background-color').then((bgcolor) => { expect(rgbHex(bgcolor)).to.eq('00000000') })


  })

  it.skip('Should check Classes on page', () => {

    cy.get('*[class^="logo-box"]')
    cy.log('Class2 is Present')
    cy.get('*[class^="hamburger-menu-mobile"]')
    cy.log('Class3 is Present')

  })


  it('Should check Video on page', () => {

    cy.visit(Cypress.env('url'))

    cy.wait(3000);
    // cy.contains('a[href*="small-img"]').click()
    cy.visit(Cypress.env('url'))

    cy.get('a[href*="q2UaDebjuSQ"]').click()
    cy.get('.uk-lightbox-toolbar-icon > svg').click()
    cy.log('Video1 is Present')

  })



  before(function () {

    cy.fixture('data').then(function (testdata) {
      this.testdata = testdata
    })

  })



})












