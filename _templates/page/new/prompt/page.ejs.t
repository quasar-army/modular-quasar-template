---
to: <%= componentDirectory %>/<%= componentNamePascal %>.vue
---
<script setup lang="ts">
// interface Props {
//   // modelValue: string
// }

// defineProps<Props>()
</script>

<template>
  <q-page
    padding
    :style-fn="(offset, height) => {
      return { height: `calc(${height - offset}px)` }
    }"
    class="column"
  >
    <div class="col">
      <h6 class="q-my-none">
        <%= componentNamePascal %>
      </h6>
    </div>
  </q-page>
</template>
