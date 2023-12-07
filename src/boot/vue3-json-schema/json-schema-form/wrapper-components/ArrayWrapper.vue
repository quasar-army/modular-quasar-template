<script lang="ts" setup>
import { JsonSchemaPropertyArrayNode } from 'vue3-ajv-form'

defineProps<{
  node: JsonSchemaPropertyArrayNode
}>()
</script>

<template>
  <q-card class="q-my-sm shadow-1">
    <q-expansion-item
      :label="node._propertyKey"
    >
      <slot />
    </q-expansion-item>
  </q-card>
</template>
