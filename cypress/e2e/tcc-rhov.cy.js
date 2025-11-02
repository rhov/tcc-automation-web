/// <reference types="cypress"/>
const { faker } = require('@faker-js/faker');
const cadastro = require('../modules/cadastro/cadastro');
const menu = require('../modules/menu/menu');
/*

*/

describe('TCC Automação Web - Rodrigo Henrique', () => {
    beforeEach(() => {
        cy.viewport("samsung-s10");
        cy.visit('https://automationexercise.com/');
    });
    it('Test Case 1: Register User', () => {
        menu.assertHomePageVisible();
        menu.assertSignupLinkVisible();
        menu.acessarPaginaCadastro();
        cadastro.assertSignupPage();
        cadastro.typeSignupName();
        cadastro.typeSignupEmail();
        cadastro.clickSignupButton();
        cadastro.assertEnterAccountInfoVisible();
        cadastro.checkTitle();
        cadastro.typePassword();
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
        cadastro.clickDeleteAccount();
        cadastro.assertDeleteAccountVisible();
        cadastro.clickContinueButton();
        menu.assertSignupLinkVisible();
    });
});