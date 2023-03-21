describe('Verify /apply is working', () => {
  it('check fields exist', () => {
    cy.mockAPI();
    cy.login();
    cy.visit('/');
    cy.wait('@session');
    cy.visit('/apply');

    ['first_name', 'last_name', 'phone_number'].forEach((inputCategory) =>
      cy.get(`input[type=text][name=${inputCategory}]`).should('be.visible')
    );
    cy.get('input[type=text][name=phone_number]').type('1231231234');
    cy.get('input[type=date]').type('2000-02-22');
    // radio inputs
    Object.entries({
      'Food Preference': ['Meat', 'Vegetarian', 'Nut Allergy'],
      'T-Shirt Size': ['S', 'M', 'L', 'XL'],
      'First time hacker?': ['Yes', 'No']
    }).forEach(([category, categoryValues]) =>
      categoryValues.forEach((categoryValue) => {
        cy.get(`[id="${category}"]`)
          .contains(categoryValue)
          .should('be.visible');
        cy.get(`[id="${category}"] > input[type=radio]`).first().click();
      })
    );
    ['gender', 'ethnicity', 'school', 'major', 'grade'].forEach(
      (selectCategory) =>
        cy.get(`select[name=${selectCategory}]`).first().select(1)
    );
    cy.get('input[type=date][name=grad_date]').should('be.visible');
    cy.get('input[type=file][name=resume]').should('be.visible');
    cy.get('input[type=checkbox][name=MLH_code_of_conduct]').should(
      'be.visible'
    );

    // select is normal select ... im not sure what to check for the dropdown
    cy.get('select[name=school]')
      .select('York University')
      .should('have.value', 'York University');

    cy.get('input[type=checkbox]').click({ multiple: true });
    cy.intercept('POST', '/api/applications/create', {
      statusCode: 201
    }).as('submit');
    cy.get('button[type=submit]:contains("Submit")').click();
    cy.wait('@submit');
  });
});

export {};
