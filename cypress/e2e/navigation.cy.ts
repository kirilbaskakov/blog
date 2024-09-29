describe('test navigation', () => {
  it('test header nav', () => {
    cy.visit('');

    cy.contains('Blog').click();
    cy.url().should('contain', '/blog');

    cy.contains('About').click();
    cy.url().should('contain', '/about');

    cy.contains('Contact').click();
    cy.url().should('contain', '/contact');

    cy.contains('Home').click();
    cy.url().should('contain', '/');

    cy.contains('Privacy policy').click();
    cy.url().should('contain', '/policy');
  });

  it('test view all button', () => {
    cy.visit('');

    cy.get('footer')
      .scrollIntoView({ duration: 1000, easing: 'linear' })
      .then(() => {
        cy.contains('View all').click();

        cy.url().should('contain', '/blog');
      });
  });

  it('discover our story button', () => {
    cy.visit('');

    for (let i = 0; i < 8; i++) {
      cy.scrollTo('bottom', { duration: 600, easing: 'linear' });
    }
    cy.contains('Discover our story').click();
    cy.url().should('contain', '/about');
  });

  it('join button', () => {
    cy.visit('');

    for (let i = 0; i < 8; i++) {
      cy.scrollTo('bottom', { duration: 600, easing: 'linear' });
    }
    cy.contains('Join Now').click();
    cy.url().should('contain', '/contact');
  });

  it('category card', () => {
    cy.visit('');

    for (let i = 0; i < 8; i++) {
      cy.scrollTo('bottom', { duration: 600, easing: 'linear' });
    }
    cy.contains('Business').last().click();
    cy.url().should('contain', '/blog/business');
  });
});
