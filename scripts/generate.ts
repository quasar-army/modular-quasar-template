import { TsGenerator } from '@quasar-army/ts-generator'
import { MakeInJsonSchema } from '@quasar-army/ts-generator-in-json-schema'
import { MakeOutPiniaOrm } from '@quasar-army/ts-generator-out-pinia-orm'
import { MakeFilePersister } from '@quasar-army/ts-generator-persister-file'
import fastGlob from 'fast-glob'
import { mkdirSync } from 'fs'
import { createEmptyFile } from './createEmptyFile'

function sleep (ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const entities = process.argv[2] ? process.argv[2].split(',') : undefined

const inJsonSchema = MakeInJsonSchema()

const outPiniaOrm = MakeOutPiniaOrm({ modelsDir: './models/', enumsDir: '../enums/' })

const filePersister = MakeFilePersister({
  modelsDir: './pinia-orm-models/',
  enumsDir: './enums/',
  complexTypesDir: '../raw-types/',
})

const generator = TsGenerator({
  tasks: {
    default: {
      in: inJsonSchema,
      out: [outPiniaOrm],
      persisters: [filePersister],
    },
  },
})

await generator.generateEntities({
  task: 'default',
  entities,
})

await sleep(1500)

const piniaOrmModelFiles = fastGlob.sync('./pinia-orm-models/*.ts')
const modelNames = piniaOrmModelFiles.map(file => {
  const filesSplit = file.split('/')
  const fileName = filesSplit[filesSplit.length - 1].replace('.ts', '')

  return fileName
})

modelNames.forEach((fileName) => {
  mkdirSync(`./src/modules/${fileName}`, { recursive: true })

  createEmptyFile(`./src/modules/${fileName}/.gitkeep`)
})
