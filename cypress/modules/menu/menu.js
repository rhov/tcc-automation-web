// Módulo de Menu
class Menu {
    acessSignupLogin() {
        cy.get('a[href="/login"]').click();
    }
    assertHomePageVisible() {
        cy.log('Verifying that home page is visible successfully');
        cy.get('a[href="/"] > i').should('have.class', 'fa-home');
    }
    assertSignupLinkVisible() {
        cy.contains('a[href="/login"]', 'Signup / Login').should('be.visible');
    }

    clickDeleteAccount() {
        cy.get('a[href="/delete_account"]').click();
    }ß

    clickLogout() {
        cy.get('a[href="/logout"][style="color:brown;"]').click();
    }

    clickContactUs() {
        cy.get('a[href="/contact_us"]').click();
    }

    clickHome() {
        cy.get('a[href="/"]').click();
    }
}
module.exports = new Menu();