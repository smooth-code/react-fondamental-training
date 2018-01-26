import chalk from 'chalk'

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

export default Character
