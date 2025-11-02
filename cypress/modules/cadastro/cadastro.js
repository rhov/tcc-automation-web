// Módulo de Cadastro

const { faker } = require('@faker-js/faker');



class Cadastro {
    assertCreateAccountVisible() {
        cy.log('Verify that "ACCOUNT CREATED!" is visible');
        cy.get('h2[data-qa="account-created"]').should('contain', 'Account Created!');
    }

    assertDeleteAccountVisible() {
        cy.log('Verify that "ACCOUNT DELETED!" is visible');
        cy.get('h2[data-qa="account-deleted"]').should('contain', 'Account Deleted!');
    }   

    assertEnterAccountInfoVisible() {
        cy.contains('b', 'Enter Account Information').should('be.visible');
    }


    assertSignupPage() {
        cy.log('Verify "New User Signup!" is visible');
        cy.get('h2').should('contain', 'New User Signup!');
    }

    checkNewsletter() {
        cy.get('input#newsletter').check();
    }

    checkOptin() {
        cy.get('input#optin').check();
    }

    checkTitle(title) {
        cy.get('input[type="radio"]').check(title || 'Mr');
    }

    clickCreateAccount() {
        cy.get('button[data-qa="create-account"]').click();
    }

    clickContinueButton(){
        cy.get('a[data-qa="continue-button"]').click();
    }

    clickDeleteAccount() {
        cy.get('a[href="/delete_account"]').click();
    }

    clickSignupButton() {
        cy.contains('button', 'Signup').click();
    }

    selectCountry(country) {
        cy.get('select[name="country"]').select(country || 'United States');
    }

    selectDate(day, month, year) {
        cy.get('select[data-qa="days"]').select(day || '1');
        cy.get('select[data-qa="months"]').select(month || 'September');
        cy.get('select[data-qa="years"]').select(year || '1992');
    }

    typeAddress1(address1) {
        cy.get('input[name="address1"]').type(address1 || faker.location.streetAddress());
    }

    typeAddress2(address2) {
        cy.get('input[name="address2"]').type(address2 || faker.location.secondaryAddress());
    }

    typeCity(city) {
        cy.get('input[name="city"]').type(city || faker.location.city());
    }

    typeCompany(company) {
        cy.get('input[name="company"]').type(company || faker.company.name());
    }

    typeFirstName(firstName) {
        cy.get('input[name="first_name"]').type(firstName || faker.person.firstName());
    }

    typeLastName(lastName) {
        cy.get('input[name="last_name"]').type(lastName || faker.person.lastName());
    }

    typeMobileNumber(mobile) {
        cy.get('input[name="mobile_number"]').type(mobile || faker.phone.number());
    }

    typePassword(password) {
        cy.get('input[data-qa="password"]').type(password || faker.internet.password());
    }

    typeSignupEmail(email) {
        cy.get('input[data-qa="signup-email"]').type(email || faker.internet.email());
    }

    typeSignupName(name) {
        cy.get('input[data-qa="signup-name"]').type(name || faker.person.fullName());
    }

    typeState(state) {
        cy.get('input[name="state"]').type(state || faker.location.state());
    }

    typeZipcode(zipcode) {
        cy.get('input[name="zipcode"]').type(zipcode || faker.location.zipCode());
    }
}

module.exports = new Cadastro();