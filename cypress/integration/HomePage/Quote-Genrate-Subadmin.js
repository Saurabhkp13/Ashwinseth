/// <reference types="Cypress" />

describe("Test Generate quote", function () {
    it("Should be able to Login and generate Quote", function () {

        cy.visit("https://hdfcrev2.id8lab.net/SME/Account/Login")
        cy.get('#email').type(this.testdata.Loginname)
        cy.get('#pwd').type(this.testdata.Password)
        cy.get('.btn').click()
        cy.get('#breakup0EmployeeCount').type(this.testdata.Ecount)
        cy.wait(2000)
        cy.get('#breakup_010155').click({force:true})
        cy.get('#insurerMargin').clear()
        cy.get('#insurerMargin').type(this.testdata.InsurerMargin)
        cy.get('#distributorMargin').clear()
        cy.get('#distributorMargin').type(this.testdata.DistributerMargin)
        cy.get('#btnSumAsuredontinue').click()

        cy.get('#btnBenefitsAgree').click()
        cy.get('#btnQuestionsAgree').click()
        cy.get('#CompanyName').clear()
        cy.get('#CompanyName').click({force:true}).type(this.testdata.Companyname)
        cy.get('#btnSubmit').click()


    })

    before(function () {

        cy.fixture('Quotesdata').then(function (testdata) {
            this.testdata = testdata
        })

    })

})