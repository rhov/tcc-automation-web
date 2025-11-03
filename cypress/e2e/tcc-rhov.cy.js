

/// <reference types="cypress"/>
const { faker } = require('@faker-js/faker');
const cadastro = require('../modules/cadastro/cadastro');
const menu = require('../modules/menu/menu');
const login = require('../modules/login/login');
const deleteAccount = require('../modules/delete/deleteAccount');
const contato = require('../modules/contato/contato');
const userFixtures = require('../fixtures/user.json');


describe('TCC Automação Web - Rodrigo Henrique', () => {
    beforeEach(() => {
        cy.viewport("samsung-s10");
    });

    it('Test Case 1: Register User', () => {
        cy.visitAutomationExercise();
        menu.assertSignupLinkVisible();
        menu.acessSignupLogin();
        cadastro.assertSignupPage();
        cadastro.typeSignupName(faker.person.fullName());
        cadastro.typeSignupEmail(faker.internet.email());
        cadastro.clickSignupButton();
        cadastro.assertEnterAccountInfoVisible();
        cadastro.checkTitle();
        cadastro.typePassword(faker.internet.password());
        cadastro.selectDate();
        cadastro.checkNewsletter();
        cadastro.checkOptin();
        cadastro.typeFirstName();
        cadastro.typeLastName();
        cadastro.typeCompany();
        cadastro.typeAddress1();
        cadastro.typeAddress2();
        cadastro.selectCountry();
        cadastro.typeState();
        cadastro.typeCity();
        cadastro.typeZipcode();
        cadastro.typeMobileNumber();
        cadastro.clickCreateAccount();
        cadastro.assertCreateAccountVisible();
        cadastro.clickContinueButton();
        menu.clickDeleteAccount();
        deleteAccount.assertDeleteAccountVisible();
        cadastro.clickContinueButton();
        menu.assertSignupLinkVisible();
    });

    it('Test Case 2: Login User with correct email and password', () => {
        const createUser = require('../support/helpers/createUser');
        const user = createUser();
        cy.visitAutomationExercise();
        menu.assertSignupLinkVisible();
        menu.acessSignupLogin();
        login.typeLoginEmail(user.email);
        login.typeLoginPassword(user.password);
        login.clickLoginButton();
        login.assertLogged(user.fullname);
        menu.clickDeleteAccount();
        deleteAccount.assertDeleteAccountVisible();
    });

    it('Test Case 3: Login User with incorrect email and password', () => {
        cy.visitAutomationExercise();
        menu.acessSignupLogin();
        login.assertLoginPageVisible();
        login.typeLoginEmail('email_invalido@teste.com');
        login.typeLoginPassword('senha_invalida');
        login.clickLoginButton();
        login.assertErrorIncorrectEmailPasswordVisible();
    });

    it('Test Case 4: Logout User', () => {
        cy.visitAutomationExercise();
        menu.acessSignupLogin();
        login.assertLoginPageVisible();
        login.typeLoginEmail(userFixtures.email);
        login.typeLoginPassword(userFixtures.password);
        login.clickLoginButton();
        login.assertLogged(userFixtures.firstName);
        menu.clickLogout();
        login.assertLoginPageVisible();
    });

    it('Test Case 5: Register User with existing email', () => {
        cy.visitAutomationExercise();
        menu.assertSignupLinkVisible();
        menu.acessSignupLogin();
        cadastro.assertSignupPage();
        cadastro.typeSignupName(faker.person.fullName());
        cadastro.typeSignupEmail(userFixtures.email);
        cadastro.clickSignupButton();
        cadastro.assertCreateAccountEmailExist();
    });

    it.only('Test Case 6: Contact Us Form', () => {
        cy.visitAutomationExercise();
        menu.clickContactUs();
        contato.assertContactPageVisible();
        contato.typeName(userFixtures.fullName);
        contato.typeEmail(userFixtures.email);
        contato.typeSubject(userFixtures.subject);
        contato.typeMessage();
        contato.uploadFile();
        contato.clickSubmitButton();
        contato.assertContactSubmittedVisible();
        contato.clickHomeButton();
        menu.assertHomePageVisible();
    });
});

/*
Test Case 8: Verify All Products and product detail page
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Products' button
5. Verify user is navigated to ALL PRODUCTS page successfully
6. The products list is visible
7. Click on 'View Product' of first product
8. User is landed to product detail page
9. Verify that detail detail is visible: product name, category, price, availability, condition, brand
*/