import loginSelectors from '../Selectors/loginSelectors';

class LoginPage {
  visit() {
    cy.visit(Cypress.env('baseUrl'));
  }

  getEmailInput() {
    return cy.get(loginSelectors.emailInput);
  }

  getPasswordInput() {
    return cy.get(loginSelectors.passwordInput);
  }

  getLoginButton() {
    return cy.get(loginSelectors.loginButton);
  }

  enterEmail(email) {
    this.getEmailInput().type(email);
  }

  enterPassword(password) {
    this.getPasswordInput().type(password);
  }

  clickLogin() {
    this.getLoginButton().click();
  }

  login(email, password) {
    this.visit();
    this.enterEmail(email);
    this.enterPassword(password);
    this.clickLogin();
  }
}

export default new LoginPage();