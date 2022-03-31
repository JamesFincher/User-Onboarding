describe("User Forms App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  //helpers

  const nameInput = () => cy.get("input[name=name]");
  const emailInput = () => cy.get("input[name=email]");
  const passwordInput = () => cy.get("input[name=password]");
  const submitButton = () => cy.get("button[type=submit]");

  it("Sanity Check", () => {
    cy.contains("ShowUsers");
    cy.contains("ShowForm");
  });
});
