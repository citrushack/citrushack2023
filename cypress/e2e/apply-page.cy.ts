describe('Verify /apply is working', () => {
	it('check fields exist', () => {
		cy.mock();
		cy.login();
		cy.visit('/');
		cy.wait("@session");
		cy.visit('/apply');

		['first_name', 'last_name', 'phone_number'].forEach(inputCategory =>
			cy.get(`input[type=text][name=${inputCategory}]`)
				.should('be.visible')
		);
		// radio inputs
		Object.entries({
			'Food Preference': ['Meat', 'Vegetarian', 'Nut Allergy'],
			'T-Shirt Size': ['S', 'M', 'L', 'XL'],
			'First time hacker?': ['Yes', 'No'],
			'Are you participating in-person or online?': ['In-Person', 'Online']
		}).forEach(([category, categoryValues]) =>
			categoryValues.forEach(categoryValue =>
				cy.get(`[id="${category}"]`)
					.contains(categoryValue)
					.should('be.visible')
			)
		);
		['gender', 'ethnicity', 'school', 'major', 'grade'].forEach(selectCategory => 
			cy.get(`select[name=${selectCategory}]`)
				.should('be.visible')
		);
		cy.get('input[type=date][name=grad_date]').should('be.visible');
		cy.get('input[type=file][name=resume]').should('be.visible');
		cy.get('input[type=checkbox][name=MLH_code_of_conduct]').should('be.visible');

		// select is normal select ... im not sure what to check for the dropdown
		cy.get('select[name=school]')
			.select('York University')
			.should('have.value', 'York University');
	});
});

export {};
