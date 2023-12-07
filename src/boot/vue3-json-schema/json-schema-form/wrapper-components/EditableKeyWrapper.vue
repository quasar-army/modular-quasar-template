<script lang="ts" setup>
import { JsonSchemaPropertyKeyNode } from 'vue3-ajv-form/dist/types/components/types/JsonSchemaPropertyNode'

defineProps<{
  node?: JsonSchemaPropertyKeyNode
}>()
</script>

<template>
  <q-card class="shadow-1">
    <q-expansion-item
      :label="node?._propertyKey"
    >
      <slot />
    </q-expansion-item>
  </q-card>
</template>
