const color = require('ansi-colors')

function message () {
  let message = 'Choose a name for the component.\n'
  message += color.red('It should include the word ')
  message += color.bold.underline.red('page')

  message += '\n'

  message += 'e.g. '
  message += color.bold.green('ManageComments')
  message += color.bold.underline.green('Page')

  return message
}

function validate (value) {
  if (value.slice(-4) !== 'Page') {
    return 'component name must end with the word "Page"'
  }

  return true
}

module.exports = () => {
  return {
    type: 'input',
    name: 'componentName',
    message () {
      return message()
    },
    validate (value) {
      return validate(value)
    },
  }
}
