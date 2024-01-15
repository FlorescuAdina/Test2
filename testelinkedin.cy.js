describe('Open the LinckedIn page', () => {

it('See if it works to write the username and the password', () =>{

cy.visit('https://linkedin.com');
cy.get('.nav__button-secondary').click();
cy.get('#username').type('adina@adina.ro');
cy.get('#password').type('123456');
cy.get('.btn__primary--large').click();

})



})