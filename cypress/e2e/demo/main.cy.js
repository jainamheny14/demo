describe('Header test for demowebshop homepage', () => {
    beforeEach(() => {
        cy.visit('http://demowebshop.tricentis.com/');
    });

    it('Header verification test for demo webshop', () => {
        cy.get('[class="header-menu"]');
        cy.get('[class="top-menu"]');
        cy.contains('Books')
            .should('have.attr', 'href', '/books'); // Assertion
        cy.contains('Computers')
            .should('have.attr', 'href', '/computers'); // Assertion
        cy.contains('Electronics')
            .should('have.attr', 'href', '/electronics'); // Assertion
        cy.contains('Apparel & Shoes')
            .should('have.attr', 'href', '/apparel-shoes'); // Assertion
        cy.contains('Digital downloads')
            .should('have.attr', 'href', '/digital-downloads'); // Assertion
        cy.contains('Jewelry')
            .should('have.attr', 'href', '/jewelry'); // Assertion
        cy.contains('Gift Cards')
            .should('have.attr', 'href', '/gift-cards'); // Assertion
    });

    it('Purchase process verification', () => {
        cy.get('[id="small-searchterms"]')
            .should('be.visible') // Assertion
            .type("Laptop"); // Type anything in searchbar
        cy.get('[class="button-1 search-box-button"]')
            .should('be.visible') // Assertion
            .click();
        cy.wait(500); // Waiting time to load the page
        cy.get('[class="product-title"]')
            .should('be.visible') // Assertion
            .click();
        cy.wait(500); // Waiting time to load the page
        cy.get('[id="add-to-cart-button-31"]')
            .should('be.visible') // Assertion
            .click();
        cy.get('[id="topcartlink"]')
            .should('be.visible') // Assertion
            .click();
        cy.get('[id="CountryId"]')
            .should('be.visible') // Assertion
            .select(1) // Select value
            .should('be.visible'); // Assertion
        cy.get('[id="StateProvinceId"]')
            .should('be.visible') // Assertion
            .select(8) // Select value
            .should('be.visible'); // Assertion
    });

    it("Navigation test for header links using JavaScript", () => {
        const links = [
          "Books",
          "Computers",
          "Electronics",
          "Apparel & Shoes",
          "Digital downloads",
          "Jewelry",
          "Gift Cards",
        ];
        links.forEach((link) => {
          cy.contains(link).click();
        });
    });

    it("Navigation test for Footer links using JavaScript", () => {
        const text = [
          "Sitemap",
          "Shipping & Returns",
          "Privacy Notice",
          "My account",
          "Orders",
          "New products",
          "Blog",
        ];
        text.forEach((text) => {
          cy.contains(text).click();
        });
    });
})