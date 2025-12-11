/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    //cy.visit('https://laboratoriodetesting.com')
    //cy.visit('https://www.laboratoriodetesting.com/products/chaqueta-deportiva-para-correr') 
    cy.setCookie(Cypress.env('nombre'),Cypress.env('token'),
      {secure: true}
    )
    cy.visit('https://www.laboratoriodetesting.com/form-practice')
  })

  it('displays two todo items by default', () => {
    cy.get('.inline-block').click()
    cy.wait(20000) //se calcula en milisegundos
    cy.contains('Añadir al carrito').click()
    cy.get('[data-at=cart-opener-mobile]').click()
    cy.get('.py-5.overflow-auto').should('contains.text','Bandas Elásticas de Resistencia')
    cy.get('.text-black.text-center').should('have.text','Total: $350.00')
    cy.get('[data-at=empty-cart]').click()
    cy.get('.text-black.text-center').should('have.text','Total: $0.00')
  })

  it('Encontrando elementos por texto',()=>{ //solo se ejecutara este test
    cy.contains('Ir de compras').click()
  })

  it.only('Econtrando elementos por atributo',()=>{
    cy.get('[data-at="increment-quantity"]').click()
    cy.get('[data-at="add-to-cart"]').click()
  })
})
