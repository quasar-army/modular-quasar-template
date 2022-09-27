const changeCase = require('change-case')
const inflection = require('inflection')
const CONSTANTS = require('../../CONSTANTS')

const moduleNamePrompt = require('./prompt/moduleNamePrompt')

module.exports = {
  prompt: ({ prompter, args }) => {
    let prompterChain

    if (!args.name) {
      prompterChain = prompter.prompt(moduleNamePrompt)
    }

    prompterChain = prompterChain || Promise.resolve({ name: args.name })

    return prompterChain.then(answers => {
      // Here, we can expose additional data to the templates
      const modulePlural = inflection.pluralize(answers.name)
      return {
        ...answers,
        ...CONSTANTS,
        modulePascal: changeCase.pascalCase(answers.name),
        moduleKebab: changeCase.pathCase(answers.name),
        moduleKebabPlural: changeCase.pathCase(modulePlural),
        moduleSnakePlural: changeCase.snakeCase(modulePlural),
        moduleCamel: changeCase.camelCase(answers.name),
        moduleCamelPlural: changeCase.camelCase(modulePlural),
      }
    })
  },
}
