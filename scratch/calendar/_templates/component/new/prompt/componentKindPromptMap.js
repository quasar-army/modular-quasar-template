const moduleSelectPrompts = require('./moduleSelectPrompts')
const baseComponentNamePrompt = require('./baseComponentNamePrompt')
const otherComponentName = require('./otherComponentName')

module.exports = {
  module: moduleSelectPrompts,
  base: [baseComponentNamePrompt],
  other: [otherComponentName],
}
