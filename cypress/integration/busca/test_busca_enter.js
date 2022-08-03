
Given(/^acesso o site$/, () => {
	cy.visit('/');
});

When(/^digito a palavra Bitcoin na pesquisa$/, () => {
	cy.get('#search_form_input_homepage').type("Bitcoin")
});

When(/^aperto a tecla Enter$/, () => {
	cy.get('#search_form_input_homepage')
      .should('be.visible')
      .type('Cypress.io{enter}')
});

Then(/^devo visualizar mais que 10 resultados na busca$/, () => {
    cy.get('.results')
      .should('contain', 'Bitcoin');
      
});
