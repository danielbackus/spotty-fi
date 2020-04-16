it('loads page', () => {
  cy.visit('/');
  cy.contains('Edit src/App.tsx and save to reload.');
});
