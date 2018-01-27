import React from 'react'
import './App.css'
import CharacterCard from './CharacterCard'
import Character from './Character'
import CharacterEditor from './CharacterEditor'

const characters = [
  new Character({
    name: 'Daenerys Targaryen',
    title: 'Mother of Dragons',
    picture:
      'http://res.cloudinary.com/smooth/image/upload/c_fill,g_face,h_400,w_500,dpr_2/v1500972396/training_react_daenerys_targaryen.png',
  }),
  new Character({
    name: 'Arya Stark',
    title: 'Princess',
    picture:
      'http://res.cloudinary.com/smooth/image/upload/c_fill,g_face,h_400,w_500,dpr_2/v1500972396/training_react_arya_stark.png',
  }),
  new Character({
    name: 'Jon Snow',
    title: 'King of the North',
    picture:
      'http://res.cloudinary.com/smooth/image/upload/c_fill,g_face,h_400,w_500,dpr_2/v1500972396/training_react_jon_snow.png',
  }),
]

const App = () => (
  <div className="container">
    <header className="header">
      <h3>Ice and Fire</h3>
    </header>
    <section className="content">
      <CharacterEditor />
      <div className="row">
        {characters.map(character => (
          <div className="col-md-4" key={character.name}>
            <CharacterCard character={character} />
          </div>
        ))}
      </div>
    </section>
  </div>
)

export default App
