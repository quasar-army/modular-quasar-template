const CONSTANTS = require('../../CONSTANTS')

module.exports = {
  module ({ moduleName, componentName }) {
    return `${CONSTANTS.directories.modules}/${moduleName}/components/${componentName}`
  },
  base ({ componentName }) {
    return CONSTANTS.directories.baseComponent + '/' + componentName
  },
  other ({ componentName }) {
    return `${CONSTANTS.directories.components}/${componentName}`
  },
}
