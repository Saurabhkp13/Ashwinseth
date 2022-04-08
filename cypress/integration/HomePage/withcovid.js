/// <reference types="Cypress" />

describe("Test Generate Subadmin", function () {
    it("Should be able to Login and generate SubAdmin", function () {
  
      cy.visit("https://hdfcrev2.id8lab.net/SMEAdm/Account/Login")
      cy.get('#email').type(this.testdata.Loginname)
      cy.get('#pwd').type(this.testdata.Password)
      cy.get('.btn').click()
      cy.get('.pr-10 > .card-block > .bg-white > .img-responsive').click()
      cy.get('#txtUserFullName').type(this.testdata.Username)
      cy.wait(1000)
      cy.get('#CompanyLocation_Id').select(this.testdata.Country)
      cy.wait(1000)
      cy.get('#Email').type(this.testdata.Email)
      cy.get('#pawd').type(this.testdata.formPassword)
      cy.get('#ddlIsSubAdmin').select(this.testdata.Subadmin)
  
  
      const Picture = 'hdfc-logo.png'
      //  cy.get('.drag-card > .custom-file-box > label').dblclick()
      cy.wait(4000)
  
      //upload file with attachFile
      cy.get('#file-upload2').attachFile(Picture)
      cy.wait(4000)
  
  
      cy.wait(1000)
      cy.get('#Cedent_Id').select(this.testdata.Cedent)
      cy.wait(1000)
  
  
      ///Grid 1
      cy.get(':nth-child(4) > .myaccordion-panel > .myaccordion-body > .btn-box > .btn-red').click()
      cy.wait(1000)
      cy.get('#InputSumAssured0').type(this.testdata.SumInsured1)
      cy.get('#InputBenefitRate_0DAC').type(this.testdata.DAC1)
      cy.wait(1000)
      cy.get('#InputBenefitRate_0ADB').type(this.testdata.ADB1)
      cy.wait(1000)
      cy.get('#InputBenefitRate_0PTDA').type(this.testdata.PTDA1)
      cy.wait(1000)
      cy.get('#InputBenefitRate_0PTDS').type(this.testdata.PTDS1)
      cy.wait(1000)
      cy.get('#InputBenefitRate_0PPDA').type(this.testdata.PPDA1)
      cy.wait(1000)
      cy.get('#InputBenefitRate_0PPDS').type(this.testdata.PPDS1)
      cy.wait(1000)
      cy.get('#InputBenefitRate_0TTDA').type(this.testdata.TTDA1)
      cy.wait(1000)
      cy.get('#InputBenefitRate_0TTDS').type(this.testdata.TTDS1)
      cy.wait(1000)
      cy.get('#InputBenefitRate_0Repat').type(this.testdata.Repat1)
      cy.wait(1000)
      cy.get('#InputBenefitRate_0Medex').type(this.testdata.Medex1)
      cy.wait(1000)
      cy.get('#InputBenefitRate_0HCA').type(this.testdata.HCA1)
      cy.wait(1000)
      cy.get('#InputBenefitRate_0EB').type(this.testdata.EB1)
      cy.wait(1000)
      cy.get('#InputBenefitRate_0TILL').type(this.testdata.TILL1)
      cy.wait(1000)
      cy.get('.loadMore').click()
  
      ///Grid 2
      cy.get('#InputSumAssured1').type(this.testdata.SumInsured2)
      cy.get('#InputBenefitRate_1DAC').type(this.testdata.DAC2)
      cy.wait(1000)
      cy.get('#InputBenefitRate_1ADB').type(this.testdata.ADB2)
      cy.wait(1000)
      cy.get('#InputBenefitRate_1PTDA').type(this.testdata.PTDA2)
      cy.wait(1000)
      cy.get('#InputBenefitRate_1PTDS').type(this.testdata.PTDS2)
      cy.wait(1000)
      cy.get('#InputBenefitRate_1PPDA').type(this.testdata.PPDA2)
      cy.wait(1000)
      cy.get('#InputBenefitRate_1PPDS').type(this.testdata.PPDS2)
      cy.wait(1000)
      cy.get('#InputBenefitRate_1TTDA').type(this.testdata.TTDA2)
      cy.wait(1000)
      cy.get('#InputBenefitRate_1TTDS').type(this.testdata.TTDS2)
      cy.wait(1000)
      cy.get('#InputBenefitRate_1Repat').type(this.testdata.Repat2)
      cy.wait(1000)
      cy.get('#InputBenefitRate_1Medex').type(this.testdata.Medex2)
      cy.wait(1000)
      cy.get('#InputBenefitRate_1HCA').type(this.testdata.HCA2)
      cy.wait(1000)
      cy.get('#InputBenefitRate_1EB').type(this.testdata.EB2)
      cy.wait(1000)
      cy.get('#InputBenefitRate_1TILL').type(this.testdata.TILL2)
      cy.wait(1000)
      cy.get('.loadMore').click()
  
      ///Grid 3
      cy.get('#InputSumAssured2').type(this.testdata.SumInsured3)
      cy.get('#InputBenefitRate_2DAC').type(this.testdata.DAC3)
      cy.wait(1000)
      cy.get('#InputBenefitRate_2ADB').type(this.testdata.ADB3)
      cy.wait(1000)
      cy.get('#InputBenefitRate_2PTDA').type(this.testdata.PTDA3)
      cy.wait(1000)
      cy.get('#InputBenefitRate_2PTDS').type(this.testdata.PTDS3)
      cy.wait(1000)
      cy.get('#InputBenefitRate_2PPDA').type(this.testdata.PPDA3)
      cy.wait(1000)
      cy.get('#InputBenefitRate_2PPDS').type(this.testdata.PPDS3)
      cy.wait(1000)
      cy.get('#InputBenefitRate_2TTDA').type(this.testdata.TTDA3)
      cy.wait(1000)
      cy.get('#InputBenefitRate_2TTDS').type(this.testdata.TTDS3)
      cy.wait(1000)
      cy.get('#InputBenefitRate_2Repat').type(this.testdata.Repat3)
      cy.wait(1000)
      cy.get('#InputBenefitRate_2Medex').type(this.testdata.Medex3)
      cy.wait(1000)
      cy.get('#InputBenefitRate_2HCA').type(this.testdata.HCA3)
      cy.wait(1000)
      cy.get('#InputBenefitRate_2EB').type(this.testdata.EB3)
      cy.wait(1000)
      cy.get('#InputBenefitRate_2TILL').type(this.testdata.TILL3)
      cy.wait(1000)
      cy.get('.loadMore').click()
  
  
  
      ///Grid 4
      cy.get('#InputSumAssured3').type(this.testdata.SumInsured4)
      cy.get('#InputBenefitRate_3DAC').type(this.testdata.DAC4)
      cy.wait(1000)
      cy.get('#InputBenefitRate_3ADB').type(this.testdata.ADB4)
      cy.wait(1000)
      cy.get('#InputBenefitRate_3PTDA').type(this.testdata.PTDA4)
      cy.wait(1000)
      cy.get('#InputBenefitRate_3PTDS').type(this.testdata.PTDS4)
      cy.wait(1000)
      cy.get('#InputBenefitRate_3PPDA').type(this.testdata.PPDA4)
      cy.wait(1000)
      cy.get('#InputBenefitRate_3PPDS').type(this.testdata.PPDS4)
      cy.wait(1000)
      cy.get('#InputBenefitRate_3TTDA').type(this.testdata.TTDA4)
      cy.wait(1000)
      cy.get('#InputBenefitRate_3TTDS').type(this.testdata.TTDS4)
      cy.wait(1000)
      cy.get('#InputBenefitRate_3Repat').type(this.testdata.Repat4)
      cy.wait(1000)
      cy.get('#InputBenefitRate_3Medex').type(this.testdata.Medex4)
      cy.wait(1000)
      cy.get('#InputBenefitRate_3HCA').type(this.testdata.HCA4)
      cy.wait(1000)
      cy.get('#InputBenefitRate_3EB').type(this.testdata.EB4)
      cy.wait(1000)
      cy.get('#InputBenefitRate_3TILL').type(this.testdata.TILL4)
      cy.wait(1000)
      cy.get('.loadMore').click()
  
  
      ///Grid 5
      cy.wait(1000)
      cy.get('#InputSumAssured4').type(this.testdata.SumInsured5)
      cy.get('#InputBenefitRate_4DAC').type(this.testdata.DAC5)
      cy.wait(1000)
      cy.get('#InputBenefitRate_4ADB').type(this.testdata.ADB5)
      cy.wait(1000)
      cy.get('#InputBenefitRate_4PTDA').type(this.testdata.PTDA5)
      cy.wait(1000)
      cy.get('#InputBenefitRate_4PTDS').type(this.testdata.PTDS5)
      cy.wait(1000)
      cy.get('#InputBenefitRate_4PPDA').type(this.testdata.PPDA5)
      cy.wait(1000)
      cy.get('#InputBenefitRate_4PPDS').type(this.testdata.PPDS5)
      cy.wait(1000)
      cy.get('#InputBenefitRate_4TTDA').type(this.testdata.TTDA5)
      cy.wait(1000)
      cy.get('#InputBenefitRate_4TTDS').type(this.testdata.TTDS5)
      cy.wait(1000)
      cy.get('#InputBenefitRate_4Repat').type(this.testdata.Repat5)
      cy.wait(1000)
      cy.get('#InputBenefitRate_4Medex').type(this.testdata.Medex5)
      cy.wait(1000)
      cy.get('#InputBenefitRate_4HCA').type(this.testdata.HCA5)
      cy.wait(1000)
      cy.get('#InputBenefitRate_4EB').type(this.testdata.EB5)
      cy.wait(1000)
      cy.get('#InputBenefitRate_4TILL').type(this.testdata.TILL5)
      cy.wait(1000)
      cy.get(':nth-child(5) > .myaccordion-panel > .myaccordion-body > .btn-box > .btn').click()
  
  
      ///End of Grid
  
      cy.get('#txtMaxEmployees').type(this.testdata.EmployeesCount)
      cy.get(':nth-child(6) > .myaccordion-panel > .myaccordion-body > .btn-box > .btn').click()
      cy.get('#InputExtraCharges_0__Enable').select(this.testdata.VAT)
      cy.get('#InputExtraCharges_1__Enable').select(this.testdata.Taxes)
      cy.get('#InputExtraCharges_2__Enable').select(this.testdata.WithholdingTaxes)
      cy.get('#InputExtraCharges_3__Enable').select(this.testdata.Admincharges)
      cy.get(':nth-child(7) > .myaccordion-panel > .myaccordion-body > .btn-box > .btn').click()
      cy.get(':nth-child(8) > .myaccordion-panel > .myaccordion-body > .btn-box > .btn').click()
      cy.get(':nth-child(9) > .myaccordion-panel > .myaccordion-body > .btn-box > .btn').click()
      //cy.get('.drag-card > .custom-file-box > label').click()
  
      //Terms and conditions upload    
      const p = 'ABNIC.pdf'
      //  cy.get('.drag-card > .custom-file-box > label').dblclick()
      cy.wait(4000)
  
      //upload file with attachFile
      cy.get('#TermsAndConditionFile').attachFile(p)
  
  
      cy.get(':nth-child(11) > .myaccordion-panel > .myaccordion-body > .btn-box > .btn').click()
      cy.wait(1000)
      cy.on('window:alert',(txt)=>{
        //Mocha assertions
        expect(txt).to.contains('Record Saved Successfully');
       cy.log('checked the message')

     })
  
    })
  
    before(function () {
  
      cy.fixture('withcovid').then(function (testdata) {
        this.testdata = testdata
      })
  
    })
  
  })