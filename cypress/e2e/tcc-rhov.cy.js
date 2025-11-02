/// <reference types="cypress"/>
const { faker } = require('@faker-js/faker');
const cadastro = require('../modules/cadastro/cadastro');
const menu = require('../modules/menu/menu');
const login = require('../modules/login/login');
const deleteAccount = require('../modules/delete/deleteAccount');
/*


*/

describe('TCC Automação Web - Rodrigo Henrique', () => {
    beforeEach(() => {
        cy.viewport("samsung-s10");
        
    });

    it('Test Case 1: Register User', () => {
        cy.visitAutomationExercise();
        menu.assertHomePageVisible();
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
        menu.assertHomePageVisible();
        menu.assertSignupLinkVisible();
        menu.acessSignupLogin();
        login.typeLoginEmail(user.email);
        login.typeLoginPassword(user.password);
        login.clickLoginButton();
        login.assertLogged(user.fullname);
        menu.clickDeleteAccount();
        deleteAccount.assertDeleteAccountVisible();

        });
});