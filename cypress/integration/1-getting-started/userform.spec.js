describe("User Forms App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  //helpers

  const nameInput = () => cy.get("input[name=name]");
  const emailInput = () => cy.get("input[name=email]");
  const passwordInput = () => cy.get("input[name=password]");
  const submitButton = () => cy.get("button[name=submit]");
  const checkBox = () => cy.get("input[name=tos]");

  it("Sanity Check", () => {
    expect(1 + 1).to.equal(2);
    expect(2 * 7).to.equal(14);
  });

  it("Proper Elements Exist", () => {
    cy.contains("ShowUsers");
    cy.contains("ShowForm");
    cy.contains("Submit");
    cy.contains("Name");
    cy.contains("Email");
    cy.contains("Password");
    nameInput().should("exist");
    emailInput().should("exist");
    passwordInput().should("exist");
    submitButton().should("exist");
    checkBox().should("exist");
  });
  it("Submit Button is Disabled When Name, Email, Password, or Checkbox are Empty", () => {
    submitButton().should("be.disabled");
  });
  it("Submit button is disabled when name is empty", () => {
    emailInput().type("Jane@doe.dev");
    passwordInput().type("Jane123456");
    checkBox().check();
    submitButton().should("be.disabled");
  });
  it("Submit button is disabled when email is empty", () => {
    nameInput().type("Jane");
    passwordInput().type("Jane123456");
    checkBox().check();
    submitButton().should("be.disabled");
  });
  it("Submit button is disabled when password is empty", () => {
    nameInput().type("Jane");
    emailInput().type("Jane@doe.dev");
    checkBox().check();
    submitButton().should("be.disabled");
  });
  it("Submit button is disabled when checkbox is empty", () => {
    nameInput().type("Jane");
    emailInput().type("Jane@doe.dev");
    passwordInput().type("Jane123456");
    submitButton().should("be.disabled");
  });
  it("Submit Button is Enabled When Name, Email, Password, and Checkbox are Filled", () => {
    nameInput().type("Jane");
    emailInput().type("Jane@doe.dev");
    passwordInput().type("Jane123456");
    checkBox().check();
    submitButton().should("not.be.disabled");
  });
  it("ShowUsers Component Renders New User When New User Is Submitted", () => {
    nameInput().type("Jane");
    emailInput().type("Jane@doe.dev");
    passwordInput().type("Jane123456");
    checkBox().check();
    submitButton().click();
    cy.contains("Jane");
    cy.contains("Jane@doe.dev");
    cy.contains("Jane123456");
  });
});
