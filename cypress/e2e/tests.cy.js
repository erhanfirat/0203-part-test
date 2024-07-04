describe("Login tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });
  // bir

  it("Form success test", () => {
    cy.get("[data-cy='email-input']").type("ali@bas.com");
    cy.get("[data-cy='password-input']").type("123!'^qweQWE");
    cy.get("[data-cy='terms-input']").check();

    cy.get("[data-cy='submit-btn']").should("be.enabled");
  });

  // iki
  it("Email Validation test", () => {
    cy.get("[data-cy='email-input']").type("alibas.com");
    cy.get("[data-cy='password-input']").type("123!'^qweQWE");
    cy.get("[data-cy='terms-input']").check();

    cy.contains("Lütfen geçerli bir email adresi giriniz...").should(
      "be.visible"
    );
  });

  it("Email & Password Validation test", () => {
    cy.get("[data-cy='email-input']").type("alibas.com");
    cy.get("[data-cy='password-input']").type("123");
    cy.get("[data-cy='terms-input']").check();

    cy.contains("Lütfen geçerli bir email adresi giriniz...").should(
      "be.visible"
    );
    cy.contains(
      "Lütfen rakam, özel karakter, büyük harf ve küçük harf içeren en az 8 karakterli bir şifre oluşturun."
    ).should("be.visible");
  });

  it("Terms Validation test", () => {
    cy.get("[data-cy='email-input']").type("ali@bas.com");
    cy.get("[data-cy='password-input']").type("123!'^qweQWE");

    cy.get("[data-cy='submit-btn']").should("be.disabled");
  });
});
