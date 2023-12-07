<script lang="ts" setup>
import { toRef, type Ref } from 'vue'
import { useVModel, syncRef } from '@vueuse/core'
import { JsonSchemaPropertyKeyNode, getOptions } from 'vue3-ajv-form'
import { mdiDelete, mdiPencilBoxOutline } from '@quasar/extras/mdi-v7'

const props = defineProps<{
  node: JsonSchemaPropertyKeyNode
  nodeKey: string
  form: Record<string | number, any>
}>()

const emit = defineEmits<{
  (event: 'update:nodeKey', nodeKey: string): void
  (event: 'update:form', form: Record<string | number, any>): void
  (event: 'remove'): void
}>()

const nodeKey = useVModel(props, 'nodeKey', emit)
const form = useVModel(props, 'form', emit)

const options = getOptions()

const syncField = options.syncKeyedObjectWithField
let formsNodeKey: Ref<string>
if (syncField) {
  formsNodeKey = toRef(form.value, syncField)
  syncRef(nodeKey, formsNodeKey)
}
</script>

<template>
  <q-card
    class="q-ma-md shadow-1"
    bordered
  >
    <q-menu context-menu>
      <q-list>
        <q-item>
          <q-item-section>
            <q-input
              filled
              label="Key"
              :model-value="nodeKey"
              @keyup.enter="event => {
                nodeKey = event.target.value
              }"
            />
          </q-item-section>
        </q-item>
      </q-list>
    </q-menu>
    <q-expansion-item>
      <q-card-section>
        <slot />
      </q-card-section>

      <template #header>
        <q-item-section>
          {{ nodeKey }}
        </q-item-section>

        <q-item-section side>
          <q-btn
            color="grey"
            flat
            :icon="mdiDelete"
            @click.stop="emit('remove')"
          />
        </q-item-section>
      </template>
    </q-expansion-item>
  </q-card>
</template>
