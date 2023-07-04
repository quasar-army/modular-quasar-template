const path = require('path')

module.exports = {
  directories: {
    modules: path.resolve(__dirname, '../src/modules'),
    baseComponent: path.resolve(__dirname, '../src/shared/components/base'),
    views: path.resolve(__dirname, '../src/views'),
    components: path.resolve(__dirname, '../src/components'),
    pages: path.resolve(__dirname, '../src/pages'),
  },
}
