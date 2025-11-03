class Products {
    assertAllProductsPageVisible() {
        cy.log('Verifying that ALL PRODUCTS page is visible successfully');
        cy.contains('h2[class="title text-center"]', 'All Products').should('be.visible');
        cy.get('div[class="product-image-wrapper"]').should('be.visible');
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

    assertProductDetailVisible() {
        cy.log('Verifying that product detail is visible');
        cy.contains('button', 'Add to cart').should('be.visible');
        cy.url().should('include', '/product_details/');
    }

    assertProductsListVisible() {
        cy.log('Verifying that products list is visible');
        cy.get('.features_items .product-image-wrapper').should('have.length.greaterThan', 0);
    }

    assertSearchedProductsContainKeyword(keyword) {
        cy.get('.features_items .product-image-wrapper').each(($el) => {
            cy.wrap($el).find('.productinfo p').invoke('text').then((text) => {
                expect(text.toLowerCase()).to.include(keyword.toLowerCase());
            });
        });
    }

    assertSearchedProductsListVisible() {
        cy.log('Verifying that all the products related to search are visible');
        cy.get('.features_items .product-image-wrapper').should('have.length.greaterThan', 0);
    }

    assertSearchedProductsPageVisible() {
        cy.log('Verifying that SEARCHED PRODUCTS is visible');
        cy.contains('h2[class="title text-center"]', 'Searched Products').should('be.visible');
    }

    assertVerifyProductsDetailPage() {
        cy.log('Verifying that product detail page is visible');
        cy.contains('button', 'Add to cart').should('be.visible');
        cy.url().should('include', '/product_details/');
    }

    clickProducts() {
        cy.get('a[href="/products"]').click();
    }

    clickSubmitSearch() {
        cy.get('button#submit_search').click();
    }

    typeSearchProduct(productName) {
        cy.get('input#search_product').type(productName);
    }

    viewProductDetails(productId) {
        cy.get(`a[href="/product_details/${productId}"]`).click();
    }

}
module.exports = new Products();