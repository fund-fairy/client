describe('FF payment form', function() {
  it('Opens the payment form', function() {
    cy.visit('https://dev.fundfairy.org/donate/?donation=5&email=iheartredsox@gmail.com')
    // cy.get('iframe.component-frame').iframeLoaded().its('document').getInDocument('#black-credit-card-button').trigger('click')
    // cy.get('iframe.component-frame').within(($iframe) => {
    //   cy.get('iframe').iframeLoaded().its('document').getInDocument('#credit-card-number').type('4443257862494732')
    // })
    cy.get('iframe.component-frame')
    .then(function ($iframe) {
      const $body = $iframe.contents().find('body')
      
      cy
        .wrap($body)
        .find('#black-credit-card-button')
        .trigger('click')

      cy.get('iframe')
      .then(function ($iframe2) {
        const $body2 = $iframe2.contents().find('body')

        cy
          .wait(5000)
        
        cy
          .wrap($body2)
          .find('#credit-card-number')
          .type('4443257862494732')
      })
    })  
  })
});