import { mount } from '@cypress/vue'
import BookingsView from '../BookingsView.vue'

describe('<BookingsView>', () => {
  beforeEach(() => {
    // cy.viewport(800, 600)
  })

  it('mounts', () => {
    mount(BookingsView, {
      props: {
        //
      },
    })
  })
})
