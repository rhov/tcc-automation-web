const { faker } = require('@faker-js/faker');
class Home {
    assertHomePageVisible() {
        cy.log('Verifying that home page is visible successfully');
        cy.get('a[href="/"] > i').should('have.class', 'fa-home');
    }

    assertSubscriptionSuccessMessage() {
        cy.log('Verifying subscription success message');
        cy.contains('div[class="alert-success alert"]','You have been successfully subscribed!').should('be.visible');
    }

    assertSubscriptionVisible() {
        cy.log("Verifying 'Subscription' section is visible");
        cy.contains('h2', 'Subscription').should('be.visible');
    }

    clickSubscriptionButton() {
        cy.log('Clicking subscription button');
        cy.get('button#subscribe').click();
    }

    typeSubscriptionEmail(email) {
        cy.log('Typing email in subscription input');
        cy.get('input#susbscribe_email').type(email || faker.internet.email());
    }
}
module.exports = new Home();