describe('My application from scratch', () => {
  context('when I visit the site', () => {
    beforeEach(() => {
      cy.visit('localhost:9000');
    });

    it('will have the correct title', () => {
      cy.title().should('include', 'My application');
    });
  });
});