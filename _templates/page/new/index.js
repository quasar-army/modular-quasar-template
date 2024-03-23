const nameComponentPrompt = require('./prompt/nameComponentPrompt')
const changeCase = require('change-case')
const CONSTANTS = require('../../CONSTANTS')
const moduleSelectPrompts = require('../../moduleSelectPrompts')

module.exports = {
  prompt: async ({ prompter }) => {
    // Discover the kind of component
    const answers = await prompter.prompt(moduleSelectPrompts[0])

    // Name the component
    Object.assign(answers, await prompter.prompt(nameComponentPrompt(answers)))

    const componentDirectory = `${CONSTANTS.directories.modules}/${answers.moduleName}/pages/${answers.componentName}`

    return {
      ...answers,
      componentDirectory,
      componentNameKebab: changeCase.paramCase(answers.componentName),
      componentNamePascal: changeCase.pascalCase(answers.componentName),
    }
  },
}
