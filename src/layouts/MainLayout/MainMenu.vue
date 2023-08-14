<script lang="ts" setup>
import { mdiPencil } from '@quasar/extras/mdi-v7'

const emit = defineEmits<{
  (event: 'example-item'): void
}>()
</script>

<template>
  <q-menu>
    <q-list>
      <q-item
        clickable
        @click="emit('example-item')"
      >
        <q-item-section avatar>
          <q-icon :name="mdiPencil" />
        </q-item-section>
        <q-item-section>
          Your Menu
        </q-item-section>
      </q-item>
    </q-list>
  </q-menu>
</template>
