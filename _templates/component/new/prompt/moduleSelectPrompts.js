const CONSTANTS = require('../../../CONSTANTS')
const fs = require('fs')

const directoriesInDirectory = fs.readdirSync(CONSTANTS.directories.modules, { withFileTypes: true })
  .filter((item) => item.isDirectory())
  .map((item) => item.name)

module.exports = [
  (answers) => {
    return {
      type: 'select',
      name: 'moduleName',
      message: 'What module is this component for?',
      choices () {
        return directoriesInDirectory
      },
    }
  },
]
