/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://laboratoriodetesting.com')
  })

  it('displays two todo items by default', () => {
    cy.get('.inline-block').click()
    cy.contains('Añadir al carrito').click()
    cy.get('[data-at=cart-opener-mobile]').click()
    cy.get('.py-5.overflow-auto').should('contains.text','Bandas Elásticas de Resistencia')
  })
})
