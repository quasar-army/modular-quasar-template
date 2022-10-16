import { mount } from '@cypress/vue'
import FilterBookingsView from '../FilterBookingsView.vue'

describe('<FilterBookingsView>', () => {
  beforeEach(() => {
    // cy.viewport(800, 600)
  })

  it('mounts', () => {
    mount(FilterBookingsView, {
      props: {
        //
      },
    })
  })
})
