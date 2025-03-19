describe("Owners page test", () => {
    it("Search for owner test", () => {
        cy.visit("/owners/find");
        
        // /owners/find
        // cy.url()
        //     .should("include", "/owners/find");
        
        cy.get('#lastName')
            .type("Davis");
        
        cy.get("#search-owner-form")
            .find("button")
            .click();
        //  /html/body/div
        cy.url()
            .should("include", "/owners?lastName=Davis");
        
        cy.get('[id="owners"]')
            .should("be.visible");
    });
});