
import { loginSelectors } from "../Selectors/loginSelectors";

class LoginPage {
  visit() {
    cy.visit(Cypress.env("baseUrl"));
  }

  login(email, password) {
    cy.get(loginSelectors.emailInput).type(email);
    cy.get(loginSelectors.passwordInput).type(password);
    cy.get(loginSelectors.loginButton).click();
  }
}

export default new LoginPage();
