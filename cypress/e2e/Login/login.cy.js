
describe("Login Test", () => {
  it("Should login successfully", () => {
    cy.login(
      Cypress.env("username"),
      Cypress.env("password")
    );
  });
});
