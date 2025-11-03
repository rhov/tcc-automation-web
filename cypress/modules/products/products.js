class Products {
    clickProducts() {
        cy.get('a[href="/products"]').click();
    }

    assertAllProductsPageVisible() {
        cy.log('Verifying that ALL PRODUCTS page is visible successfully');
        cy.contains('h2[class="title text-center"]', 'All Products').should('be.visible');
        cy.get('div[class="product-image-wrapper"]').should('be.visible');
    }

    assertProductsListVisible() {
        cy.log('Verifying that products list is visible');
        cy.get('.features_items .product-image-wrapper').should('have.length.greaterThan', 0);
    }

    assertVerifyProductsDetailPage() {
        cy.log('Verifying that product detail page is visible');
        cy.contains('button', 'Add to cart').should('be.visible');
        cy.url().should('include', '/product_details/');
    }

    assertProductDetailInfoVisible() {
        cy.get('.product-information').within(() => {
            cy.get('h2').should('be.visible');
            cy.contains('Category').should('be.visible');
            cy.get('span').contains('Rs.').should('be.visible');
            cy.contains('Availability').should('be.visible');
            cy.contains('Condition').should('be.visible');
            cy.contains('Brand').should('be.visible');
        });
    }

    viewProductDetails(productId) {
        cy.get(`a[href="/product_details/${productId}"]`).click();
    }

}
module.exports = new Products();