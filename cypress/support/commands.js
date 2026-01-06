// custom commands
import { loginSelectors } from '../../Selectors/loginSelectors';

Cypress.Commands.add('login', (email, password) => {
  cy.visit(Cypress.env('baseUrl'));
  cy.get(loginSelectors.emailInput).type(email);
  cy.get(loginSelectors.passwordInput).type(password);
  cy.get(loginSelectors.loginButton).click();
});