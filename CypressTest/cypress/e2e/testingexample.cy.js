describe('Basic Cypress Test', () => {
    it('should load Cypress website and verify main heading', () => {
        cy.visit('https://www.cypress.io')
        cy.contains('h1', 'Test. Automate. Accelerate').should('be.visible')
    })
})

describe('Button Existence Test', () => {
    it('should verify that buttons exist on the page', () => {
        cy.visit('https://www.cypress.io')
        cy.get('button').should('exist')
    })
})

describe('Click Element Test', () => {
    it('should click on the <a> element with id "dropdownProduct"', () => {
        cy.visit('https://www.cypress.io')
        cy.get('a#dropdownProduct').click()
    })
})
describe('Click Element Test', () => {
    it('should click on the <a> element with id "dropdownDocs"', () => {
        cy.visit('https://www.cypress.io')
        cy.get('a#dropdownDocs').click()
    })
})

describe('Click Element Test', () => {
    it('should click on the <a> element with id "dropdownCommunity"', () => {
        cy.visit('https://www.cypress.io')
        cy.get('a#dropdownCommunity').click()
    })
})

describe('Verify Element After Click Test', () => {
    it('should verify the appearance of <h1> element with text "cy.blog()"', () => {
        cy.visit('https://www.cypress.io')
        cy.get('a#dropdownCommunity').click()
        cy.get('h1').contains('cy.blog()').should('be.visible')
    })
})

describe('Verify Elements After Click Test', () => {
    it('should verify the appearance of <h1> element and paragraph', () => {
        cy.visit('https://www.cypress.io')
        cy.get('a#dropdownCommunity').click()
        cy.get('h1').contains('cy.blog()').should('be.visible')
        cy.contains('p', 'Sharing our challenges, mistakes, hacks, successes, opinions and news')
            .should('be.visible')
    })
})