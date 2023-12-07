import { boot } from 'quasar/wrappers'
import { createVueModel } from '@vuemodel/core'
import { createPiniaLocalStorage, piniaLocalVueModelDriver } from '@vuemodel/pinia-local-storage'

export default boot(({ app, store }) => {
  const piniaLocalStorage = createPiniaLocalStorage({
    frontStore: store,
  })

  const vueModel = createVueModel({
    default: 'local',
    drivers: {
      local: {
        implementation: piniaLocalVueModelDriver,
        config: { pinia: store }
      }
    },
  })

  app.use(vueModel)
  app.use(piniaLocalStorage)
})
