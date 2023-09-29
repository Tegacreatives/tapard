describe("Should reserve an apartment", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");

    //Click on drop down menu
    cy.get("[data-testid=dropdown-button]").click();

    // Reveal login modal
    cy.get("[data-testid=login-popup]").click();
    cy.get(".modal").should("be.visible");

    // Find the input fields and enter correct credentials
    cy.get("[data-testid=email-input]").type("test@gmail.com");
    cy.get("[data-testid=password-input]").type("12345678@12");
    cy.get("[data-testid=login-button]").click();

    cy.get("#listing").eq(0).click();
    cy.get("[data-testid=reserve-button]").click();

    cy.origin("https://checkout.paystack.com/", () => {
      cy.get(".card").eq(0).click();
      cy.get(".button").eq(0).click();
    });
  });
});
