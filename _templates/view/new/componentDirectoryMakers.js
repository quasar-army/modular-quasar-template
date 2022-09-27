const CONSTANTS = require('../../CONSTANTS')

module.exports = {
  module ({ moduleName, componentName }) {
    return `${CONSTANTS.directories.modules}/${moduleName}/views/${componentName}`
  },
  other ({ componentName }) {
    return `${CONSTANTS.directories.views}/${componentName}`
  },
}
