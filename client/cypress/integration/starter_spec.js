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
  });

  context('when I enter a new item', () => {
    beforeEach(() => {
      cy.visit('localhost:9000');
    });

    it('will allow entering a new item', () => {
      cy.get('#new-task').type('Go to Mars');
      cy.get('#big-button').click();
      cy.get('#todo-list')
        .should('contain', 'Go to Mars');
    });
  });

  context('when I review my list', () => {
    beforeEach(() => {
      cy.visit('localhost:9000');
    });

    it('will have a delete button beside each item', () => {
      cy.get('#todo-list').within(function() {
        cy.get('li:first').get('.delete-button').should('exist');
      });
    });
  });

  context('when I click the delete button', () => {
    beforeEach(() => {
      cy.visit('localhost:9000');
    });

    it('will remove the item from the list', () => {
      cy.get('#todo-list').within(() => {
        cy.get('li:last').within(() => {
          cy.get('.delete-button').click();
        });
      });

      cy.get('#todo-list').should('not.contain', 'Save the world');
    });
  });
});
