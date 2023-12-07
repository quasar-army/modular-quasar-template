import { boot } from 'quasar/wrappers'
import Ajv from 'ajv'
import { JsonSchemaPlugin } from 'vue3-ajv-form'

import AddButton from './json-schema-form/button-components/AddButton.vue'
import RemoveButton from './json-schema-form/button-components/RemoveButton.vue'
import ArrayWrapper from './json-schema-form/wrapper-components/ArrayWrapper.vue'
import ArrayNodeWrapper from './json-schema-form/wrapper-components/ArrayNodeWrapper.vue'
import NodeWrapper from './json-schema-form/wrapper-components/NodeWrapper.vue'
import ObjectWrapper from './json-schema-form/wrapper-components/ObjectWrapper.vue'
import EditableKeyWrapper from './json-schema-form/wrapper-components/EditableKeyWrapper.vue'
import EditableKeyNodeWrapper from './json-schema-form/wrapper-components/EditableKeyNodeWrapper.vue'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(({ app }) => {
  const ajv = new Ajv({ strict: false, allErrors: true })

  app.use(JsonSchemaPlugin, {
    ajv,
    addButton: AddButton,
    removeButton: RemoveButton,
    arrayWrapper: ArrayWrapper,
    arrayNodeWrapper: ArrayNodeWrapper,
    nodeWrapper: NodeWrapper,
    objectWrapper: ObjectWrapper,
    editableKeyWrapper: EditableKeyWrapper,
    syncKeyedObjectWithField: 'key',
    editableKeyNodeWrapper: EditableKeyNodeWrapper,
  })
})
