import { describe, cy, it } from "node:test";

describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
  });
});
