function getElement(name) {
  if (name.match(/stark/i)) return 'ice'
  if (name.match(/targaryen/i)) return 'fire'
  if (name.match(/snow/i)) return 'ice and fire'
  return null
}

function displayCharacter({ name, title }) {
  console.log(name + ' - ' + title + ' - ' + getElement(name))
}

const daenerys = { name: 'Daenerys Targaryen', title: 'Mother of Dragons' }
const aria = { name: 'Aria Stark', title: 'Princess' }
const jon = { name: 'Jon Snow', title: 'King of the North' }

displayCharacter(daenerys)
displayCharacter(aria)
displayCharacter(jon)
