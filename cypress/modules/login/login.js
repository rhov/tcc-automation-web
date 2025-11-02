const { faker } = require('@faker-js/faker');

class Login {
        assertLoginPageVisible() {
                cy.get('h2').should('contain', 'Login to your account');
        }

        assertLogged(name){
                cy.log('Verify "Login to your account" is visible');
                cy.get('a').should('contain.text', `Logged in as ${name}`);
        }

        typeLoginEmail(email) {
                cy.get('input[data-qa="login-email"]').type(email || faker.internet.email());
        }

        typeLoginPassword(password) {
                cy.get('input[data-qa="login-password"]').type(password || faker.internet.password());
        }

        clickLoginButton() {
                cy.get('button[data-qa="login-button"]').click();
        }

        assertLoggedInAsVisible() {
                cy.contains('a', 'Logged in as').should('be.visible');
        }

        clickDeleteAccount() {
                cy.get('a[href="/delete_account"]').click();
        }

        assertAccountDeletedVisible() {
                cy.get('h2').should('contain', 'ACCOUNT DELETED!');
        }

        assertErrorIncorrectEmailPasswordVisible() {
                cy.log("Verify error 'Your email or password is incorrect!' is visible");
                cy.get('p').should('contain', 'Your email or password is incorrect!');
        }
}

module.exports = new Login();

