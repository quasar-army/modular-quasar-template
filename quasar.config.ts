/* eslint-env node */

import { configure } from 'quasar/wrappers'
import path from 'path'
const env = await import('./env/' + process.env.NODE_ENV + '.ts')

export default configure((/* ctx */) => {
  return {
    eslint: {
      warnings: false,
      errors: false,
    },

    boot: [
      'unocss',
      'vuemodel',
      'vue3-json-schema/vue3-json-schema',
    ],

    css: [
      'app.scss',
    ],

    extras: [
      'roboto-font',
    ],

    build: {
      target: {
        browser: ['es2022', 'firefox115', 'chrome115', 'safari14'],
        node: 'node20',
      },

      publicPath: process.env.PUBLIC_PATH ?? '',

      vueRouterMode: 'history',

      alias: {
        modules: path.join(__dirname, './src/modules'),
        config: path.join(__dirname, './config'),
      },

      vitePlugins: [
        // ['vite-plugin-checker', {
        //   vueTsc: {
        //     tsconfigPath: 'tsconfig.vue-tsc.json',
        //   },
        //   eslint: {
        //     lintCommand: 'eslint "./**/*.{js,ts,mjs,cjs,vue}"',
        //   },
        // }, { server: false }],
        ['unplugin-auto-import/vite', {
          imports: [
            'vue',
          ],
          dts: true,
          eslintrc: {
            enabled: true,
          },
        }],
        ['unocss/vite', {}],
      ],

      env,
    },

    devServer: {
      open: false,
    },

    framework: {
      config: {},

      iconSet: 'svg-mdi-v7',
      plugins: ['Notify'],
    },

    animations: [],

    ssr: {
      prodPort: 3000,

      middlewares: [
        'render',
      ],

      pwa: false,
    },

    pwa: {
      workboxMode: 'GenerateSW',
    },

    cordova: {
    },

    capacitor: {
      hideSplashscreen: true,
    },

    electron: {
      preloadScripts: ['electron-preload'],

      inspectPort: 5858,

      bundler: 'packager',

      packager: {

      },

      builder: {
        appId: 'modular-quasar-play',
      },
    },

    bex: {
      contentScripts: [
        'my-content-script',
      ],
    },
  }
})
