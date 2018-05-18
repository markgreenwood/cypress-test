describe('My application from scratch', () => {
  context('when I visit the site', () => {
    beforeEach(() => {
      cy.visit('localhost:9000');
    });

    it('will have the correct title', () => {
      cy.title().should('include', 'GitRDone');
    });

    it('will have a big button', () => {
      cy.get('#big-button').should('contain', 'Click Me');
    });
  });
});