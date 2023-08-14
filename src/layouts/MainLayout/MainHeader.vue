<script lang="ts" setup>
import { mdiAccount, mdiMenu } from '@quasar/extras/mdi-v7'
import MainMenu from './MainMenu.vue'

const emit = defineEmits<{
  (event: 'toggleDrawer'): void
}>()
</script>

<template>
  <q-header class="shadow-1">
    <q-toolbar>
      <q-btn
        :icon="mdiMenu"
        round
        flat
        @click="emit('toggleDrawer')"
      />

      <q-toolbar-title class="text-weight-light">
        Modular Quasar
      </q-toolbar-title>

      <q-btn
        round
        flat
        :icon="mdiAccount"
      >
        <MainMenu auto-close />
      </q-btn>
    </q-toolbar>
  </q-header>
</template>
