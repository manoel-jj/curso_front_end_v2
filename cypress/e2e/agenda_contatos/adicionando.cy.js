/// <reference types="cypress" />

describe('teste para adicionar um novo contato', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app')
    })

  

     it('Deve preencher e adicionar um novo contato', () => {
         cy.get('[type="text"]').type('manoel jailton')
         cy.get('[type="email"]').type('manoeltestes@gmail.com')
         cy.get('[type="tel"]').type('79 9 9999-9999')
         cy.get('.adicionar').click()
         
         cy.screenshot('adcioando-contato')

 })
 it('Deve editar todas os dados do contato', () => {
    cy.get('.edit').click({ multiple: true }); 
  
    cy.get('[type="text"]').clear();
    cy.get('[type="text"]').type('vitoria de jesus');
    cy.get('[type="email"]').clear();

    cy.screenshot('editando-contato');
  
    
  });
  

   it('deve deletar o contato da agenda', () => {
    cy.get('.delete').as('deleteButtons'); 
    cy.get('@deleteButtons').click({ multiple: true }); 
  
    cy.screenshot('excluindo-contato');
  });
    


    
})

