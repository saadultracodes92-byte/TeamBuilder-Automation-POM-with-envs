import users from '../../fixtures/users.json';

describe("Login Test", () => {
  // Test 1: Valid login
  it("Should login successfully", () => {
    cy.login(users.validUser.email, users.validUser.password);
    // Assert that dashboard or home page is visible after login
    cy.url().should('not.include', '/Account/Login');
    cy.get('body').should('not.contain', 'Invalid');
    cy.screenshot('login-success');
  });

  // Test 2: Invalid password
  it("Should show error for invalid password", () => {
    cy.login(users.validUser.email, users.invalidUser.password);
    // Assert that error message is shown
    cy.get('.error-message').should('be.visible').and('contain', 'Invalid');
    cy.url().should('include', '/Account/Login');
    cy.screenshot('login-invalid-password');
  });

  // Test 3: Invalid email
  it("Should show error for invalid email", () => {
    cy.login(users.invalidUser.email, users.validUser.password);
    // Assert that error message is shown
    cy.get('.error-message').should('be.visible').and('contain', 'Invalid');
    cy.url().should('include', '/Account/Login');
    cy.screenshot('login-invalid-email');
  });

  // Test 4: Empty fields validation
  it("Should validate empty fields", () => {
    cy.login(users.emptyUser.email, users.emptyUser.password);
    // Assert that error message or required validation is shown
    cy.get('.error-message, .validation-message').should('be.visible');
    cy.url().should('include', '/Account/Login');
    cy.screenshot('login-empty-fields');
  });

  // Test 5: Password masked
  it("Should mask password input", () => {
    cy.visit(Cypress.env('baseUrl'));
    // Assert that password field is of type password
    cy.get('#passwordInput').should('have.attr', 'type', 'password');
    cy.screenshot('login-password-masked');
  });
});
