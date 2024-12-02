describe('Login Test', () => {
    
    it('Should logged in successfully and "dashboard" title shpuld be visible', () => {
        cy.login();
        cy.url().should('include', '/dashboard');
        cy.contains('div.title', 'Dashboard').should('be.visible');
        cy.logout();
    });

  });