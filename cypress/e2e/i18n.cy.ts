describe('test i18n', () => {
  it('change locale', () => {
    cy.visit('');

    cy.get('*[data-testid=locale-select]').first().select('Русский');
    cy.url().should('contain', 'ru');

    cy.contains('Главная');
    cy.contains('Блог');
    cy.contains('О нас');

    cy.get('*[data-testid=locale-select]').first().select('English');
    cy.url().should('not.contain', 'ru');
  });
});
