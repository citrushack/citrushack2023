describe('Toggle theme button', () => {
	const checkTheme = (theme) => {
		cy.mock();
		cy.get('html').should('have.attr', 'data-theme').and('equal', theme);
		cy.get('html').should('have.css', 'color-scheme').and('equal', theme);
	};
	it('check document data-theme and color-scheme style', () => {
		cy.visit('/');

		checkTheme('light');
		cy.get('span.md\\:block > button:has(svg)').click();
		checkTheme('dark');
	});
});

export {};
