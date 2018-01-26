const chalk = require('chalk')

function getElement(name) {
  if (name.match(/stark/i)) return 'ice'
  if (name.match(/targaryen/i)) return 'fire'
  if (name.match(/snow/i)) return 'ice and fire'
  return null
}

const elementColors = {
  ice: 'blue',
  fire: 'red',
  'ice and fire': 'magenta',
}

function displayCharacter({ name, title }) {
  const element = getElement(name)
  const color = elementColors[element]
  console.log(chalk`{${color} ${name} - ${title}}`)
}

const characters = [
  { name: 'Daenerys Targaryen', title: 'Mother of Dragons' },
  { name: 'Aria Stark', title: 'Princess' },
  { name: 'Jon Snow', title: 'King of the North' },
]

characters.forEach(displayCharacter)
