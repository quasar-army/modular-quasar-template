module.exports = [
  (answers) => {
    return {
      type: 'input',
      name: 'componentName',
      message: 'Base Component Name (e.g. BDialog)',
      default: 'B',
    }
  },
]
