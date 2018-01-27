import React from 'react'
import Character from './Character'
import PropTypes from 'prop-types'
import FormGroup from './components/FormGroup'

class CharacterForm extends React.Component {
  handleChange = event => {
    this.props.onChange(
      new Character({
        ...this.props.value,
        [event.target.id]: event.target.value,
      }),
    )
  }

  render() {
    return (
      <form>
        <FormGroup>
          <label htmlFor="name">Name</label>
          <input
            onChange={this.handleChange}
            value={this.props.value.name}
            className="form-control"
            id="name"
            placeholder="Enter name"
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="title">Title</label>
          <textarea
            onChange={this.handleChange}
            value={this.props.value.title}
            className="form-control"
            id="title"
            placeholder="Enter title"
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="picture">Image</label>
          <input
            onChange={this.handleChange}
            value={this.props.value.picture}
            className="form-control"
            id="picture"
            placeholder="http://"
          />
        </FormGroup>
      </form>
    )
  }
}

CharacterForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string,
    picture: PropTypes.string,
  }).isRequired,
}

export default CharacterForm
