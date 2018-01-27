import React from 'react'
import CharacterCard from './CharacterCard'
import CharacterForm from './CharacterForm'
import Character from './Character'

class CharacterEditor extends React.Component {
  state = {
    character: new Character({
      name: 'Character Name',
      title: 'Character Title',
      picture: '',
    }),
  }

  handleChange = character => this.setState({ character })

  render() {
    return (
      <div className="row mb-4">
        <div className="col-sm">
          <CharacterForm
            onChange={this.handleChange}
            value={this.state.character}
          />
        </div>
        <div className="col-sm">
          <CharacterCard character={this.state.character} />
        </div>
      </div>
    )
  }
}

export default CharacterEditor
