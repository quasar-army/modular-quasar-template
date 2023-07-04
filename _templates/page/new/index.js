const nameComponentPrompt = require('./prompt/nameComponentPrompt')
const changeCase = require('change-case')
const CONSTANTS = require('../../CONSTANTS')

module.exports = {
  prompt: async ({ prompter }) => {
    // Name the component
    const answers = await prompter.prompt(nameComponentPrompt())

    const componentDirectory = CONSTANTS.directories.pages

    return {
      ...answers,
      componentDirectory,
      componentNameKebab: changeCase.paramCase(answers.componentName),
      componentNamePascal: changeCase.pascalCase(answers.componentName),
    }
  },
}
