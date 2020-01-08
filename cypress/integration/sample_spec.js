describe('FF payment form', function() {
  it('Opens the payment form', function() {
    cy.visit('https://dev.fundfairy.org/donate/?donation=5&email=iheartredsox@gmail.com')
    cy.get('#black-credit-card-button').click()
  })
});