<script setup lang="ts">
interface Props {
  filters: any
}

defineProps<Props>()

// defineEmits<{
//   // (event: 'update:moduleValue', payload: string): void
// }>()
</script>

<template>
  <div>
    <pre>{{ filters }}</pre>
  </div>
</template>
