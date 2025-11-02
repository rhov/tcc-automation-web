class DeleteAccount {
    assertDeleteAccountVisible() {
        cy.log('Verify that "ACCOUNT DELETED!" is visible');
        cy.get('h2[data-qa="account-deleted"]').should('contain', 'Account Deleted!');
    }

    clickContinueButton(){
        cy.get('a[data-qa="continue-button"]').click();
    }
}

module.exports = new DeleteAccount();
