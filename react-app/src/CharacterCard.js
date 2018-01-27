import React from 'react'
import PropTypes from 'prop-types'
import Card from './components/Card'
import CardBody from './components/CardBody'
import CardImg from './components/CardImg'
import CardText from './components/CardText'
import CardTitle from './components/CardTitle'

const CharacterCard = ({ character }) => (
  <Card>
    {character.picture ? (
      <CardImg src={character.picture} alt={character.name} />
    ) : null}
    <CardBody>
      <CardTitle style={{ color: character.getColor() }}>
        {character.name}
      </CardTitle>
      <CardText>{character.title}</CardText>
    </CardBody>
  </Card>
)

CharacterCard.propTypes = {
  character: PropTypes.shape({
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    getColor: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}

export default CharacterCard
