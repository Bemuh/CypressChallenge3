import { navigateTo } from "../support/page_objects/navigationPage.js"
import { bookStore } from "../support/page_objects/bookStoreApplication.js"

describe('template spec', () => {
  beforeEach('open the app', () => {
    Cypress.on('uncaught:exception', () => { return false })
    cy.visit('/')

    cy.getCookies().should('not.be.empty')
    cy.clearCookies()
    cy.getCookies().should('be.empty')
  })

  it('Add a random book to the library', () => {

    navigateTo.bookStorePage()

    cy.location('pathname').should('equal', '/books')

    bookStore.login(Cypress.env('username'),Cypress.env('password'))
          
    bookStore.loginCheck(Cypress.env('username'))
      
    bookStore.navigateTo('Book Store')

    bookStore.addBook()

    bookStore.navigateTo('Profile')

    bookStore.bookCheck()

    bookStore.bookDelete()
    
    cy.intercept({
      method: 'DELETE',
      url: '**/BookStore/v1/Book'
    }).as('deleteBook')
    
    cy.wait('@deleteBook').then((interception) => {
      expect(interception.response.statusCode).to.eq(204);
    })

    //cy.wait(5000)

    bookStore.bookCheck()

  })
})