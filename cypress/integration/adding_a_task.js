describe('Adding a task', () => {
    it("it displays the task in the list", () => {
        cy.visit('http://localhost:3000');

        cy.get('[data-testid="title-input"]')
            .type("New title");

        cy.get('[data-testid="description-input"]')
            .type("New description");

        cy.get('[data-testid="add-note-button"]')
            .click();

        cy.contains("New title");
        cy.contains("New description");
    });
});