import React from 'react'
import CharacterCard from './CharacterCard'
import Character from './Character'

class CharacterEditor extends React.Component {
  state = {
    character: new Character({
      name: 'Character Name',
      title: 'Character Title',
      picture: '',
    }),
  }

  render() {
    return (
      <div className="row mb-4">
        <div className="col-sm" />
        <div className="col-sm">
          <CharacterCard character={this.state.character} />
        </div>
      </div>
    )
  }
}

export default CharacterEditor
