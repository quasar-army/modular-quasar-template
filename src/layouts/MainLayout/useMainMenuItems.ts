import { RouteLocationNamedRaw } from 'vue-router'
import { baseMenuItems } from './baseMenuItems'

export interface MenuItem {
  label: string
  to: RouteLocationNamedRaw
  icon: string
}

export function useMainMenuItems () {
  const menuItems = computed(() => {
    return [
      ...baseMenuItems,
    ]
  })

  return menuItems
}
