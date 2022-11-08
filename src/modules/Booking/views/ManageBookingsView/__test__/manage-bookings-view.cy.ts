import ManageBookingsView from '../ManageBookingsView.vue'

describe('<ManageBookingsView>', () => {
  beforeEach(() => {
    // cy.viewport(800, 600)
  })

  it('mounts', () => {
    cy.mount(ManageBookingsView, {
      props: {
        //
      },
    })
  })
})
