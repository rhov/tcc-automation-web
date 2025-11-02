const { faker } = require('@faker-js/faker');
const cadastro = require('../../modules/cadastro/cadastro');
const menu = require('../../modules/menu/menu');

function createUser() {
    const user = {
        email: faker.internet.email(),
        password: faker.internet.password(),
        fullname: faker.person.fullName()
    };

    cy.visit('https://automationexercise.com/login');
    cadastro.typeSignupName(user.fullname);
    cadastro.typeSignupEmail(user.email);
    cadastro.clickSignupButton();
    cadastro.checkTitle();
    cadastro.typePassword(user.password);
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
    cadastro.clickContinueButton();
    menu.clickLogout();
    return user;
}

module.exports = createUser;