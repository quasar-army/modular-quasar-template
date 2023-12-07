<script lang="ts" setup>
import { JsonSchemaPropertyObjectNode } from 'vue3-ajv-form'

defineProps<{
  node: JsonSchemaPropertyObjectNode
}>()
</script>

<template>
  <q-card class="q-my-sm shadow-1">
    <q-expansion-item
      :label="node._propertyKey"
    >
      <q-card-section>
        <slot />
      </q-card-section>
    </q-expansion-item>
  </q-card>
</template>
