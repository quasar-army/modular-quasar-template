<script setup lang="ts">
import { useVModel } from '@vueuse/core'

interface Props {
  filters: {
    date: string
  }
}

const props = defineProps<Props>()

const emits = defineEmits<{
  (event: 'update:filters', payload: string): void
}>()

const filters = useVModel(props, 'filters', emits)
</script>

<template>
  <div>
    <q-input v-model="filters.date" />
  </div>
</template>
