import { mdiBook } from '@quasar/extras/mdi-v7'
import { MenuItem } from './useMainMenuItems'

export const baseMenuItems: MenuItem[] = [
  {
    icon: mdiBook,
    label: 'Example Menu Item',
    to: { name: 'example' },
  },
]
