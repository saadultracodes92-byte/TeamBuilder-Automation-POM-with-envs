
// Login test cases
// 1. Valid login
describe('Login', () => {
  it('logs in and opens dashboard', () => {
    // Custom command cy.login() should perform login steps
    cy.login();
    // Visit dashboard page after login
    cy.visit('/schedule');
    // Assert dashboard loaded
    cy.url().should('include', '/schedule');
    cy.screenshot('dashboard-loaded');
  });
});
