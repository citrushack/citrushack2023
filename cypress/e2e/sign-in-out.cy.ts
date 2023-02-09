describe('Check sign out button (sign in is mocked)', () => {
	it('make sure log out succeeds', () => {
		// setup spying before request happens
		cy.server();
		cy.intercept({
			method: 'POST',
			url: '/api/auth/signout',
		}).as('post');	

		cy.mock();
		cy.login();
		cy.visit('/');
		cy.wait('@session');
		cy.get('div.relative > button').click();
		cy.get('button.group:contains("Sign Out")').click();
		cy.wait('@post');
	});
});

export {};
