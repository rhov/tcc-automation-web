// Módulo de Menu
class Menu {
    acessarPaginaCadastro() {
        cy.get('a[href="/login"]').click();
    }
    assertHomePageVisible() {
        cy.log('Verifying that home page is visible successfully');
        cy.get('a[href="/"] > i').should('have.class', 'fa-home');
    }
    assertSignupLinkVisible() {
        cy.contains('a[href="/login"]', 'Signup / Login').should('be.visible');
    }

}
module.exports = new Menu();