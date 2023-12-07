<script lang="ts" setup>
import { mdiPlus } from '@quasar/extras/mdi-v7'
import { inject } from 'vue'

const readOnly = inject<boolean>('json-schema-form:read-only', false)
</script>

<template>
  <div class="q-pl-md q-pb-md">
    <q-btn
      v-if="!readOnly"
      color="primary"
      unelevated
      :icon="mdiPlus"
    />
  </div>
</template>
