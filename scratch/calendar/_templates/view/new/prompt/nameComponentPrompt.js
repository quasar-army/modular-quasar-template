const color = require('ansi-colors')
const changeCase = require('change-case')
const inflection = require('inflection')

const messageFunctionsMap = {
  module: ({ moduleName }) => {
    const moduleNamePascal = changeCase.pascalCase(moduleName)
    const moduleNamePascalPlural = inflection.pluralize(moduleNamePascal)

    let message = 'Choose a name for the component.\n'
    message += color.red('It should include the ')
    message += color.bold.underline.red('module name')
    message += color.red(' and end with the word ')
    message += color.bold.underline.red('View')

    message += '\n'

    message += 'e.g. '
    message += color.bold.green('Manage')
    message += color.bold.underline.green(moduleNamePascalPlural)
    message += color.bold.green('View')
    message += ' or '
    message += color.bold.underline.green(`${moduleNamePascal}`)
    message += color.bold.green('Details' + 'View')

    return message
  },
  other: () => {
    let message = 'Choose a name for the component.\n'

    message += color.red('it should end with the word ')
    message += color.bold.underline.red('View')

    message += '\n'

    message += 'e.g. '
    message += color.bold.green('ImportVideosView')
    message += ' or '
    message += color.bold.green('DashingDashboardView')

    return message
  },
}

const validateFunctionsMap = {
  module: (value, { moduleName }) => {
    const moduleNamePascal = changeCase.pascalCase(moduleName)
    const moduleNamePascalPlural = inflection.pluralize(moduleNamePascal)
    const missingmodulesName = !value.includes(moduleNamePascal) &&
      !value.includes(moduleNamePascalPlural)

    if (missingmodulesName) {
      return `component must include either '${moduleNamePascal}' or '${moduleNamePascalPlural}' in its name`
    }

    if (value.slice(-4) !== 'View') {
      return 'component name must include the word "View"'
    }

    return true
  },
  other: (value) => {
    if (value.slice(-4) !== 'View') {
      return 'component name must include the word "View"'
    }

    return true
  },
}

module.exports = (answers) => {
  return {
    type: 'input',
    name: 'componentName',
    message () {
      return messageFunctionsMap[answers.componentType](answers)
    },
    validate (value, state) {
      return validateFunctionsMap[answers.componentType](value, answers)
    },
  }
}
