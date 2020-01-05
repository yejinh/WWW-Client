describe('WWW', function() {
  this.beforeEach(() => {
    cy.setLocalStorage()
  })

  it('should be able to create new project', () => {
    cy.wait(1000).screenshot('main')

    cy.get('.new-project').click()
      .get('input[type = "text"]').first().type('E2E TEST')

      .get('input[type = "email"]').type('ypqdhmdnou_1572003278@tfbnw.net')
      .get('.find-member-submit').click()
      .get('.add-member').click()

      .get('input[type = "email"]').type('dwoflrpvdv_1571994064@tfbnw.net')
      .get('.find-member-submit').click()
      .get('.add-member').click()

      .get('input[type = "email"]').type('nrrvisfxsh_1571904374@tfbnw.net')
      .get('.find-member-submit').click()
      .get('.add-member').click()

    cy.screenshot('new project')

    cy.get('.new-project-submit').click()
      .get('.new-project-main-button').click()
  })

  it('should be able to check project infomation and members on Main page', () => {
    cy.wait(2000).scrollTo('bottom', { duration: 1000 })
      .get('.project-list-member-wrapper').last().scrollTo('right', { duration: 1000 })
  })

  it('should be able to delete a project', () => {
    cy.wait(1000).get('.project-list-title').last().click()

      .wait(2000).get('.project-chart-style').click()
      .wait(2000).get('.project-chart-style').click()

    cy.screenshot('chart')

    cy.get('.project-delete').click()
      .get('.project-main-button').click()
  })

  it('should be able to logout', () => {
    cy.get('.sign-out').click({ force: true })
  })
})
