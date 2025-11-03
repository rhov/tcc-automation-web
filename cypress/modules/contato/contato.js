
const { faker } = require('@faker-js/faker');


class Contato {
    assertContactPageVisible() {
        cy.log('Verifying that contact page is visible successfully');
        cy.contains('h2[class="title text-center"]', 'Get In Touch').should('be.visible');
    }

    assertContactSubmittedVisible() {
        cy.log('Verify success message "Success! Your details have been submitted successfully." is visible');
        cy.get('div.status').should('contain', 'Success! Your details have been submitted successfully.');
    }

    clickHomeButton() {
        cy.get('a[class="btn btn-success"]').click();
    }

    clickSubmitButton() {
        cy.get('[data-qa="submit-button"]').click();
    }

    typeEmail(email) {
        cy.get('[data-qa="email"]').type(email || faker.internet.email());
    }

    typeMessage(message) {
        cy.get('[data-qa="message"]').type(message || faker.lorem.sentence());
    }

    typeName(name) {
        cy.get('[data-qa="name"]').type(name || faker.person.fullName());
    }

    typeSubject(subject) {
        cy.get('[data-qa="subject"]').type(subject || faker.lorem.words(3));
    }

    uploadFile() {
        cy.fixture('automation-exercise.png').as('arquivo');
        cy.get('input[type=file]').selectFile('@arquivo');
    }
}

module.exports = new Contato();