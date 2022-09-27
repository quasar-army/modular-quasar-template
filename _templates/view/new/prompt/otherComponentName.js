const CONSTANTS = require('../../../CONSTANTS')
const fs = require('fs')

const directoriesInDIrectory = fs.readdirSync(CONSTANTS.directories.modules, { withFileTypes: true })
  .filter((item) => item.isDirectory())
  .map((item) => item.name)

module.exports = {
  type: 'input',
  name: 'componentName',
  message: 'Component Name',
  choices () {
    return directoriesInDIrectory
  },
}
