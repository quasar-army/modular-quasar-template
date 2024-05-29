import { RouteRecordRaw } from 'vue-router'

function resolveImportedRoutes (modules: Record<string, { [key: string]: any }>, exportName: string) {
  return Object.values(modules)
    .filter(module => module[exportName])
    .flatMap(module => module[exportName])
}

const routes: RouteRecordRaw[] = [
  ...resolveImportedRoutes(import.meta.glob('../modules/*/routes.ts', { eager: true }), 'base'),
  {
    path: '/',
    component: () => import('layouts/MainLayout/MainLayout.vue'),
    children: [
      ...resolveImportedRoutes(import.meta.glob('../modules/*/routes.ts', { eager: true }), 'main'),
      {
        path: '',
        component: () => import('pages/IndexPage/IndexPage.vue'),
      },
      {
        path: 'example',
        name: 'example',
        component: () => import('pages/ExamplePage/ExamplePage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
