describe('GitRDone', () => {
  context('when I visit the site', () => {
    beforeEach(() => {
      cy.visit('localhost:9000');
    });

    it('will have the correct title', () => {
      cy.title().should('include', 'GitRDone');
    });

    it('will announce what the site is for', () => {
      cy.get('#page-title').should('contain', 'GitRDone List Maker');
    });

    it('will have a list of items', () => {
      cy.get('#todo-list')
        .should('contain', 'Do this')
        .should('contain', 'Do that')
        .should('contain', 'Save the world');
    });

    it('will have a place to enter a new item', () => {
      cy.get('#new-task')
        .should('exist');
    });

    it('will allow entering a new item', () => {
      cy.get('#new-task').type('Go to Mars');
      cy.get('#big-button').click();
      cy.get('#todo-list')
        .should('contain', 'Go to Mars');
    });
  });
});
