/**
 * NavigationPage class provides methods to navigate through different pages 
 * or categories in a web application. The methods interact with elements 
 * having the class 'category-cards' and perform clicks on specific headings to 
 * reach different parts of the application.
 */
class NavigationPage {

    /**
     * Navigates to the "Elements" page by clicking on the first heading that contains the text 'Elements'.
     */
    elementsPage(){
        cy.get('.category-cards')
        .find('h5')
        .first()
        .should('contain', 'Elements')
        .click()    
    }

    /**
     * Navigates to the "Forms" page by clicking on the heading with index 1 that contains the text 'Forms'.
     */
    formsPage(){
        cy.get('.category-cards')
        .find('h5')
        .eq(1)
        .should('contain', 'Forms')
        .click()            
    }

    /**
     * Navigates to the "Alerts, Frame & Windows" page by clicking on the heading with index 2 that contains the mentioned text.
     */
    alertsPage(){
        cy.get('.category-cards')
        .find('h5')
        .eq(2)
        .should('contain', 'Alerts, Frame & Windows')
        .click()            
    }

    /**
     * Navigates to the "Widgets" page by clicking on the heading with index 3 that contains the text 'Widgets'.
     */
    widgetsPage(){
        cy.get('.category-cards')
        .find('h5')
        .eq(3)
        .should('contain', 'Widgets')
        .click()            
    }

    /**
     * Navigates to the "Interactions" page by clicking on the heading with index 4 that contains the text 'Interactions'.
     */
    interactionsPage(){
        cy.get('.category-cards')
        .find('h5')
        .eq(4)
        .should('contain', 'Interactions')
        .click()            
    }    

    /**
     * Navigates to the "Book Store Application" page by clicking on the last heading that contains the mentioned text.
     */
    bookStorePage(){
        cy.get('.category-cards')
        .find('h5')
        .last()
        .should('contain', 'Book Store Application')
        .click()          
    } 

}

// Export an instance of the NavigationPage class.
export const navigateTo = new NavigationPage