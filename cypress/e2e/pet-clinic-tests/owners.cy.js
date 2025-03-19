describe("Owners page tests", () => {
    beforeEach(() => {
        cy.visit("/");
        
        cy.get(".nav-item")
            .eq(1)
            .click();

        cy.url()
            .should('include', '/owners/find');
    });

    it("Search for owner", () => {
        cy.get('#lastName')
            .type("Davis{enter}");
        
        cy.url()
            .should('include', '/owners?lastName=Davis')
            .and('not.include', 'pets')
            .and('not.eq', 'teste');

        cy.get("#owners")
            .should("be.visible");
    });

    it("Search for an inexistent owner", () => {
        
        cy.get('#lastName')
            .type("Teste");
        
        cy.get("#search-owner-form")
            .find('button')
            .click();
        
        cy.get("#lastNameGroup")
            .should("include.text", "has not been found");

    });

    it("Navigate through owners list", () => {
    
        cy.get('[type="submit"]')
            .click();
        
        cy.get(':nth-child(8) > .fa')
            .click();
        
        cy.url()
            .should("include", "/owners?page=1");
    });

});