

import users from '../../fixtures/users.json';

describe('Login', () => {
  // 1. Valid login
  it('logs in and opens dashboard', () => {
    cy.login(users.validUser.email, users.validUser.password);
    cy.visit('/schedule');
    cy.url().should('include', '/schedule');
    cy.screenshot('dashboard-loaded');
  });

  // 2. Invalid login (invalid email & password)
  it('shows error for invalid credentials', () => {
    cy.login(users.invalidUser.email, users.invalidUser.password);
    cy.get('.error-message, .validation-message').should('be.visible');
    cy.url().should('not.include', '/schedule');
    cy.screenshot('login-invalid');
  });

  // 3. Empty fields
  it('shows validation for empty fields', () => {
    cy.login(users.emptyUser.email, users.emptyUser.password);
    cy.get('.error-message, .validation-message').should('be.visible');
    cy.url().should('not.include', '/schedule');
    cy.screenshot('login-empty-fields');
  });

  // 4. Forgot password
  it('sends reset link for forgot password', () => {
    cy.visit('/login');
    cy.contains('Forgot Password').click();
    cy.get('#emailInput').type('saad@example.com');
    cy.get('#submitButton').click();
    cy.get('.success-message, .validation-message').should('be.visible');
    cy.screenshot('forgot-password');
  });

  // 5. Invalid email with valid password
  it('shows error for invalid email and valid password', () => {
    cy.login(users.invalidUser.email, users.validUser.password);
    cy.get('.error-message, .validation-message').should('be.visible');
    cy.url().should('not.include', '/schedule');
    cy.screenshot('login-invalid-email');
  });
});
