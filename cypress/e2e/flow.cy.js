import { navigateTo } from "../support/page_objects/navigationPage.js"
import { bookStore } from "../support/page_objects/bookStoreApplication.js"

describe('template spec', () => {
  beforeEach('open the app', () => {
    // Suppress uncaught exceptions
    Cypress.on('uncaught:exception', () => { return false })
    cy.visit('/') // Visit the main page

    // Assert that cookies are present, then clear them
    cy.getCookies().should('not.be.empty')
    cy.clearCookies()
    cy.getCookies().should('be.empty')
  })

  it('Add a random book to the library', () => {

    // Navigate to the bookstore page
    navigateTo.bookStorePage()

    // Verify the correct path
    cy.location('pathname').should('equal', '/books')

    // Login to the bookstore application using environment variables
    bookStore.login(Cypress.env('username'),Cypress.env('password'))
          
    // Check that the login was successful
    bookStore.loginCheck(Cypress.env('username'))
      
    // Navigate to the Book Store section
    bookStore.navigateTo('Book Store')

    // Add a random book from the available options
    bookStore.addBook()

    // Navigate to the Profile section
    bookStore.navigateTo('Profile')

    // Check that the previously added book matches the one shown in the profile
    bookStore.bookCheck()

    // Delete the book
    bookStore.bookDelete()
    
    // Intercept and validate the DELETE request for book deletion
    cy.intercept({
      method: 'DELETE',
      url: '**/BookStore/v1/Book'
    }).as('deleteBook')
    
    // Wait for the DELETE request and check the response code
    cy.wait('@deleteBook').then((interception) => {
      expect(interception.response.statusCode).to.eq(204);
    })

    // Re-check that the book was actually deleted from the profile
    bookStore.bookCheck()
  })
})
