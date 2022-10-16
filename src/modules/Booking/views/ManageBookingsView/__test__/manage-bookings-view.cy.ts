import { mount } from '@cypress/vue'
import ManageBookingsView from '../ManageBookingsView.vue'

describe('<ManageBookingsView>', () => {
  beforeEach(() => {
    // cy.viewport(800, 600)
  })

  it('mounts', () => {
    mount(ManageBookingsView, {
      props: {
        //
      },
    })
  })
})
