
Given(/^acesso o site$/, () => {
    cy.visit('/');
});

When(/^digito a palavra Bitcoin na pesquisa$/, () => {
	cy.get('#search_form_input_homepage').type("Bitcoin")
});

When(/^clico no ícone Lupa$/, () => {
	cy.get('#search_button_homepage').click()
});

Then(/^devo visualizar mais que 10 resultados na busca$/, () => {
	cy.get('.results')
      .should('contain', 'bitcoin');
});
