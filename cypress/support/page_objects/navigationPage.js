class NavigationPage {

    elementsPage(){
        cy.get('.category-cards')
        .find('h5')
        .first()
        .should('contain', 'Elements')
        .click()    
    }

    formsPage(){
        cy.get('.category-cards')
        .find('h5')
        .eq(1)
        .should('contain', 'Forms')
        .click()            
    }

    alertsPage(){
        cy.get('.category-cards')
        .find('h5')
        .eq(2)
        .should('contain', 'Alerts, Frame & Windows')
        .click()            
    }

    widgetsPage(){
        cy.get('.category-cards')
        .find('h5')
        .eq(3)
        .should('contain', 'Widgets')
        .click()            
    }

    widgetsPage(){
        cy.get('.category-cards')
        .find('h5')
        .eq(4)
        .should('contain', 'Interactions')
        .click()            
    }    

    bookStorePage(){
        cy.get('.category-cards')
        .find('h5')
        .last()
        .should('contain', 'Book Store Application')
        .click()          
    } 

}

export const navigateTo = new NavigationPage