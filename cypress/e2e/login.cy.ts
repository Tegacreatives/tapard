describe("user can login", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");

    //Click on drop down menu
    cy.get("[data-testid=dropdown-button]").click();

    // Reveal login modal
    cy.get("[data-testid=login-popup]").click();
    cy.get(".modal").should("be.visible");

    // Find the input fields and enter invalid credentials
    cy.get("[data-testid=email-input]").type("wrong@example.com");
    cy.get("[data-testid=password-input]").type("wrongpassword");
    cy.get("[data-testid=login-button]").click();
    cy.contains(/Invalid Credentials/i).should("be.visible");

    cy.get("[data-testid=close-button]").click();

    cy.visit("http://localhost:3000/");

    //Click on drop down menu
    cy.get("[data-testid=dropdown-button]").click();

    // Reveal login modal
    cy.get("[data-testid=login-popup]").click();
    cy.get(".modal").should("be.visible");

    // Find the input fields and enter invalid password
    cy.get("[data-testid=email-input]").type("test@gmail.com");
    cy.get("[data-testid=password-input]").type("wrongpassword");
    cy.get("[data-testid=login-button]").click();
    cy.contains(/Invalid Password/i).should("be.visible");

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
    cy.contains(/Logged in Successfully/i).should("be.visible");

    //Reveal create property popup
    cy.get("[data-testid=add-property]").click();
  });
});
