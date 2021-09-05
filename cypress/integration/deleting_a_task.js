describe('Deleting a task', () => {
    it("it removes the task from the list", () => {
        cy.visit('http://localhost:3000');

        cy.get('[data-testid="title-input"]')
            .type("New title");

        cy.get('[data-testid="description-input"]')
            .type("New description");

        cy.get('[data-testid="add-note-button"]')
            .click();

        cy.contains("New title");
        cy.contains("New description");

        cy.get(".delete-button")
            .click();
        
        cy.contains("New title").should("not.exist");
        cy.contains("New description").should("not.exist");
    });
});