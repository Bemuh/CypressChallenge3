# DemoQA Bookstore Automation

This project contains automated scripts to test various actions on the DemoQA website, specifically focused on the bookstore section. The steps involved in the test include visiting the website, logging in, adding a book to the profile, and ensuring that the book was correctly added and can be deleted.

## What the Project Does

1. Visit [DemoQA](https://demoqa.com/).
2. Navigate to the bookstore page.
3. Log in using credentials.
4. Check that the user is logged in to the correct account.
5. Within the bookstore, navigate to the Book Store section.
6. Add a random book from the ones available.
7. Within the bookstore, navigate to the Profile section.
8. Check that the previously added book is the same as the one shown in the profile.
9. Delete the book.
10. Check that the book was actually deleted from the profile.

## How to Run the Project Locally

### Prerequisites

- Ensure that you have Node.js installed.
- Cypress should be installed as part of the project dependencies.

### Steps

1. **Clone the Repository**: Use `git clone` to clone the project to your local machine.
2. **Navigate to the Project Folder**: Use `cd` to navigate into the project directory.
3. **Install Dependencies**: Run `npm install` to install all necessary dependencies.
4. **Open Cypress**: Use `npx cypress open` to open the Cypress Test Runner.
5. **Run the Test**: Click on the specific test file within the Cypress window to run the tests.

### Note

Make sure to use your own credentials when logging in to the bookstore application.