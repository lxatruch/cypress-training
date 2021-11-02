/// <reference types="cypress" />

beforeEach('', () =>{
  cy.visit("https://www.saucedemo.com/");
})
describe('My First Test', () => {
    it('Assert Login Title', () => {
      cy.title().should('eq', 'Swag Labs');
    }),
    it('Log in the page!', () => {
      cy.get('[placeholder = "Username"]').type('standard_user');
      cy.get('[placeholder = "Password"]').type('secret_sauce');
      cy.get('.submit-button').click();
    }),
    it('Click on Sauce Labs Backpack!', () => {
      cy.get('[placeholder = "Username"]').type('standard_user');
      cy.get('[placeholder = "Password"]').type('secret_sauce');
      cy.get('.submit-button').click();
      cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click();
      cy.get('.shopping_cart_link').click();
      cy.get('.inventory_item_name').contains('Sauce Labs Backpack');
      cy.get('[data-test=checkout]').click();
      cy.get('[data-test=firstName]').type('Test');
      cy.get('[data-test=lastName]').type('Test');
      cy.get('[data-test=postalCode]').type('40002');
      cy.get('[data-test=continue]').click();
      cy.get('.summary_total_label').contains('Total: $32.39');
      cy.get('[data-test=finish]').click();
      cy.get('.complete-header').contains('THANK YOU FOR YOUR ORDER');
      cy.get('#react-burger-menu-btn').click();
      cy.get('#logout_sidebar_link').click();

    })
  }) 
  