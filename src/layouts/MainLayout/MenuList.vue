<script lang="ts" setup>
import { RouteLocationRaw } from 'vue-router'
import { mdiCircle } from '@quasar/extras/mdi-v7'

export interface MenuItem {
  label: string
  icon: string
  to?: RouteLocationRaw
}

interface Props {
  items: MenuItem[]
}

defineProps<Props>()
</script>

<template>
  <q-list>
    <q-item
      v-for="item in items"
      :key="item.label"
      :to="item.to"
      clickable
    >
      <q-item-section side>
        <q-icon :name="item.icon || mdiCircle" />
      </q-item-section>
      <q-item-section>
        {{ item.label }}
      </q-item-section>
    </q-item>
  </q-list>
</template>
