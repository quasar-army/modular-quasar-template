---
to: <%= componentDirectory %>/__test__/<%= componentNameKebab %>.cy.ts
---
import { mount } from '@cypress/vue'
import <%= componentNamePascal %> from '../<%= componentNamePascal %>.vue'

describe('<<%= componentNamePascal %>>', () => {
  beforeEach(() => {
    // cy.viewport(800, 600)
  })

  it('mounts', () => {
    mount(<%= componentNamePascal %>, {
      props: {
        //
      },
    })
  })
})
