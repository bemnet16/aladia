describe("Check if server is live", () => {
  it("server is live", () => {
    cy.visit("http://localhost:3000");
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("already existing user (in memory database)", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("localhost:3000");
    cy.get("#email-field").clear("place@holder.com");
    cy.get("#email-field").type("place@holder.com");
    cy.get(".gap-4 > .gradient").click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("register new user (in memory database)", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("localhost:3000");
    cy.get("#email-field").clear("new");
    cy.get("#email-field").type("new@gmail.com");
    cy.get(".gap-4 > .gradient").click();
    cy.get(".justify-between > .relative > .flex").click();
    cy.get("#terms-checkbox").check();
    cy.get("#name").clear("A");
    cy.get("#name").type("Bemnet Adugnaw");
    cy.get("#surname").click();
    cy.get("#name").clear("Bemnet Ad");
    cy.get("#name").type("Bemnet");
    cy.get("#surname").clear("Adugnaw");
    cy.get("#surname").type("Adugnaw");
    cy.get(":nth-child(6) > .group > #password").clear("s");
    cy.get(":nth-child(6) > .group > #password").type("string");
    cy.get(":nth-child(7) > .group > #password").clear("s");
    cy.get(":nth-child(7) > .group > #password").type("string");
    cy.get(".py-1\\.5 > .gradient").click();
    /* ==== End Cypress Studio ==== */
  });
});
