


Given(/^acesso o site$/, () => {
    cy.intercept(
        'GET',
        `**?q=${'Bitcoin'}**`
      ).as('getSearchResults');

	cy.visit('/')
});

When(/^seleciono o formulário pra pesquisa$/, () => {
    cy.get('form input[type="text"]')
    .as('searchField')
    .should('be.visible');

	cy.get('@searchField')
      .type("Bitcoin")
});

When(/^submeto o formulário$/, () => {
	cy.get('form').submit()
});

Then(/^devo visualizar mais que 10 resultados na busca$/, () => {
	cy.wait('@getSearchResults');
});
