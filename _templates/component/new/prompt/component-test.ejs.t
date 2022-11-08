---
to: <%= componentDirectory %>/__test__/<%= componentNameKebab %>.cy.ts
---
import <%= componentNamePascal %> from '../<%= componentNamePascal %>.vue'

describe('<<%= componentNamePascal %>>', () => {
  beforeEach(() => {
    // cy.viewport(800, 600)
  })

  it('mounts', () => {
    cy.mount(<%= componentNamePascal %>, {
      props: {
        //
      },
    })
  })
})
