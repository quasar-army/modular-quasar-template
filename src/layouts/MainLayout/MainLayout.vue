<script setup lang="ts">
import MainDrawer from './MainDrawer.vue'
import MainHeader from './MainHeader.vue'
import { useMainMenuItems } from './useMainMenuItems'

const menuItems = useMainMenuItems()
const showDrawer = ref(false)
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <MainHeader
      :menu-items="menuItems"
      @toggle-drawer="showDrawer = !showDrawer"
    />

    <MainDrawer
      v-model="showDrawer"
      :menu-items="menuItems"
      class="shadow-2"
    />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
