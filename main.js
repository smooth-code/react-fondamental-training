const chalk = require('chalk')

const delay = async time => new Promise(resolve => setTimeout(resolve, time))

class Character {
  constructor({ name, title }) {
    this.name = name
    this.title = title
  }

  getElement() {
    if (this.name.match(/stark/i)) return 'ice'
    if (this.name.match(/targaryen/i)) return 'fire'
    if (this.name.match(/snow/i)) return 'ice and fire'
    return null
  }

  getColor() {
    const elementColors = {
      ice: 'blue',
      fire: 'red',
      'ice and fire': 'magenta',
    }

    return elementColors[this.getElement()]
  }

  display() {
    console.log(chalk`{${this.getColor()} ${this.name} - ${this.title}}`)
  }
}

const characters = [
  new Character({ name: 'Daenerys Targaryen', title: 'Mother of Dragons' }),
  new Character({ name: 'Aria Stark', title: 'Princess' }),
  new Character({ name: 'Jon Snow', title: 'King of the North' }),
]

async function main() {
  for (let character of characters) {
    character.display()
    await delay(1000)
  }
}

main()
