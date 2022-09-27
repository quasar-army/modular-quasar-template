import { boot } from 'quasar/wrappers'
import { StrapiPlugin, StrapiPluginOptions } from 'strapi-pinia-orm'
import { Notify } from 'quasar'
import { singular } from 'pluralize'

export default boot(({ app }) => {
  app.use(StrapiPlugin, {
    providers: {
      default: {
        apiEndpoint: 'http://localhost:1337/api',
        errorNotifiers: {
          create: ({ entityType }) => Notify.create({ message: `Error creating ${singular(entityType)}` }),
          update: ({ entityType }) => Notify.create({ message: `Error updating ${singular(entityType)}` }),
          remove: ({ entityType }) => Notify.create({ message: `Error removing ${singular(entityType)}` }),
          fetch: ({ entityType }) => Notify.create({ message: `Error fetching ${entityType}` }),
          fetchOne: ({ entityType }) => Notify.create({ message: `Error fetching a ${singular(entityType)}` }),
        },
      },
    },
  } as StrapiPluginOptions)
})
