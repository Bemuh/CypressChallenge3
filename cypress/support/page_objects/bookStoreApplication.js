/**
 * BookStore class provides methods to perform actions like navigation,
 * login, book addition, book checking, and book deletion in a bookstore application.
 */
class BookStore {

    /**
     * Navigate to a specific page in the bookstore by clicking the corresponding text link.
     * @param {string} page - The name of the page to navigate to.
     */
    navigateTo(page){
        cy.contains('span.text', page).click()
    }

    /**
     * Logs into the bookstore application with the given username and password.
     * @param {string} username - The username to use for logging in.
     * @param {string} password - The password to use for logging in.
     */
    login(username, password){
        this.navigateTo('Login')
        cy.location('pathname').should('equal', '/login')
        cy.get('#userName').type(username)
        cy.get('#password').type(password)
        cy.get('#login').should('contain', 'Login').click()
    }

    /**
     * Checks whether the user has logged in successfully by comparing the provided username.
     * @param {string} username - The username to check.
     */
    loginCheck(username) {
        cy.get('#userName-value').invoke('text').then(text => {
            expect(text.trim().toLowerCase()).to.equal(username.toLowerCase())
        })
    }

    /**
     * Adds a random book from the available list and sets the book name as an alias called "bookName".
     */
    addBook(){

        cy.get('div.action-buttons a')  // Retrieve all the links
        .then($links => {
          const randomIndex = Math.floor(Math.random() * $links.length)  // Generate a random index
          let bookName = $links[randomIndex].innerText  // Store the text of the randomly chosen link
          cy.wrap($links[randomIndex]).click()  // Click the randomly chosen link
          cy.wrap(bookName).as('bookName')
        })
  
        cy.get('@bookName').then(bookName => {
            cy.get('#title-wrapper label#userName-value').should('contain.text', bookName)
        })
  
        cy.get('.text-right.fullButton button#addNewRecordButton').click()

    }

    // bookCheck() {
    //     cy.get('@bookName').then(bookName => {
    //         const cellSelector = '.rt-tbody .rt-tr-group .rt-tr:first .rt-td:eq(1)';
    //         cy.get(cellSelector).invoke('text').then(text => {
    //             text = text.trim(); // Trim the text to remove any leading or trailing spaces
    //             if (text === '') {
    //                 cy.get(cellSelector).should('have.text', String.fromCharCode(160));
    //             } else {
    //                 expect(text).to.equal(bookName); // Use the Chai assertion instead
    //             }
    //         });
    //     });
    // }

    /**
     * Checks whether the correct book name is displayed on the page.
     * If the text in the specified cell is empty, it should be a non-breaking space (ASCII code 160);
     * otherwise, it should match the expected book name.
     */
    bookCheck() {
        // Retrieve the alias "bookName" that holds the expected book name
        cy.get('@bookName').then(bookName => {
            
            // Define the selector for the specific cell that will contain the text
            const cellSelector = '.rt-tbody .rt-tr-group .rt-tr:first .rt-td:eq(1)'
            
            // Use Cypress's `invoke` method to retrieve the text within the cell
            cy.get(cellSelector).invoke('text').then(text => {
                
                // Trim the retrieved text to remove any leading or trailing white spaces
                text = text.trim()
                
                // Determine the expected text based on the retrieved text:
                // If text is empty, it should be a non-breaking space (ASCII code 160)
                // otherwise, it should match the expected book name
                const expectedText = text === '' ? '' : bookName
                
                // Assert that the retrieved text matches the expected text
                expect(text).to.equal(expectedText)
            })
        })
    }
    
    /**
     * Deletes a book from the bookstore.
     */
    bookDelete() {
        cy.get('#delete-record-undefined').click()
        cy.get('#closeSmallModal-ok').click()
    }
}

// Export an instance of the BookStore class.
export const bookStore = new BookStore