Cypress.on('uncaught:exception', (err, runnable) => {
    // to prevent the errors thrown in cross origin script
    return false
  })


describe("Test the webapplication", () => {

    it('Load the google home page ', () => {
        cy.visit('https://www.google.com/')
        cy.title()
        .should('include', 'Google')
    })
          
    
      
      })
      