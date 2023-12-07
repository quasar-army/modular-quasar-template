<script lang="ts" setup>
import { mdiDelete } from '@quasar/extras/mdi-v7'
import { inject } from 'vue'

const readOnly = inject<boolean>('json-schema-form:read-only', false)
</script>

<template>
  <div v-if="!readOnly">
    <q-btn
      color="red-4"
      unelevated
      :icon="mdiDelete"
    />
  </div>
</template>
