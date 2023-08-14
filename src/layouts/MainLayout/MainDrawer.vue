<script lang="ts" setup>
import { MenuItem } from './useMainMenuItems'

defineProps<{
  menuItems: MenuItem[]
}>()
</script>

<template>
  <q-drawer>
    <q-tabs
      indicator-color="primary"
      active-color="primary"
      no-caps
      class="text-grey-10"
      inline-label
      switch-indicator
      vertical
    >
      <q-item-label header>
        Menu
      </q-item-label>
      <q-route-tab
        v-for="menuItem in menuItems"
        :key="menuItem.label"
        color="primary"
        class="justify-start"
        :to="menuItem.to"
        :icon="menuItem.icon"
        :label="menuItem.label"
        exact
      />
    </q-tabs>
    <!-- <q-item
      v-for="menuItem in menuItems"
      :key="menuItem.label"
      clickable
    >
      <q-item-section
        v-if="menuItem.icon"
        avatar
      >
        <q-icon
          :color="menuItem.iconColor"
          :name="menuItem.icon"
        />
      </q-item-section>
      <q-item-section class="text">
        {{ menuItem.label }}
      </q-item-section>
    </q-item> -->
  </q-drawer>
</template>
