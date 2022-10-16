<script setup lang="ts">
import ManageBookingsView from 'modules/Booking/views/ManageBookingsView/ManageBookingsView.vue'
import { ref } from 'vue'
import FilterBookingsView from '../FilterBookingsView/FilterBookingsView.vue'
import { useUrlSearchParams } from '@vueuse/core'

const filters = useUrlSearchParams('history')
</script>

<template>
  <div class="row">
    <FilterBookingsView
      v-model:filters="filters"
      class="bg-grey-2"
    />
    <ManageBookingsView :filters="filters" />
  </div>
</template>
