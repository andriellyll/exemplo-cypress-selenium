it('my first test', () => {
    cy.visit('/owners/find');
    cy.get('#lastName')
        .type("Lucena");
});