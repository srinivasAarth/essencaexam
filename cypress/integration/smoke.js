describe('smoke', () => {


    beforeEach(()=>{
        cy.visit('http://localhost:3000')
    })
                it('checking the localhost url', () => {
                     cy.contains('Loading...')
                   

                })
                it('checking user-profile-data ', ()=>{
                    cy.get('.listCards').click({ multiple: true })
                    cy.get('.listCards').children().should('contain', 'Name : Leanne Graham').and('be.visible');
                    cy.get('.listCards').children().should('contain', 'Address : Gwenborough').and('be.visible');
                    cy.get('.listCards').children().should('contain', 'Street : Kulas Light').and('be.visible');
                    cy.get('.listCards').children().should('contain', 'Zipcode : 92998-3874').and('be.visible');
                })
                it('checking the album data',()=>{
                    cy.contains('click Profile').click({multiple:true})
                    cy.get('.listCar').children().should('contain', 'Albums : quidem molestiae enim').and('be.visible');
                    cy.get('.listCar').children().should('contain', 'view Album').and('be.visible');
                    cy.get('.btnBack').should('contain', 'Goto UserList').click()

                })
                it('checking the user profile button',()=>{
                    cy.get(':nth-child(2) > .btnAccess').click()
                    cy.get('.btnBack').should('contain', 'Goto UserList').click()
                })
                it('checking the ablum buttons',()=>{
                    cy.get(':nth-child(2) > .btnAccess').click()
                    cy.get(':nth-child(7) > .buttonalbm').click()
                    cy.get('.gridimg').children().should('contain', 'Title').and('be.visible');
                })
                it('checking go-to albumList and userList buttons',()=>{
                    cy.get(':nth-child(2) > .btnAccess').click()
                    cy.get(':nth-child(7) > .buttonalbm').click()
                    cy.get('.gridimg').children().should('contain', 'Title').and('be.visible');
                    cy.get('.backAlbam').click()
                    cy.get('.btnBack').click()
                })

})