import { config as configureEnv } from 'dotenv'
import { outputFileSync, removeSync } from 'fs-extra/esm'
import { exec } from 'child_process'
import { pascalCase } from 'change-case'
import pluralize from 'pluralize'

configureEnv()

export default {
  schema: {
    listen: {
      events: {
        'schema.changed' (payload: any) {
          outputFileSync(
            `./schemas/${payload.schema.$id}.schema.json`,
            JSON.stringify(payload.schema, null, 2),
          )
          exec('pnpm generate')
        },
        'schema.deleted' (data: any) {
          removeSync(`./schemas/${data.payload.singular_name}.schema.json`)
          const className = pascalCase(pluralize.singular(data.payload.singular_name))
          removeSync(`./pinia-orm-models/${className}.ts`)
          removeSync(`./src/modules/${className}`)
          exec('pnpm generate')
        },
      },
      onStart: async (schemas: any) => {
        schemas.forEach((schema: any) => {
          outputFileSync(
            `./schemas/${schema.$id}.schema.json`,
            JSON.stringify(schema, null, 2),
          )
        })
        exec('pnpm generate')
      },
    },
    projectId: process.env.BLUE_PROJECT_ID,
    token: process.env.BLUE_TOKEN,
  },
}
