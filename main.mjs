import Character from './Character'

const delay = async time => new Promise(resolve => setTimeout(resolve, time))

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
