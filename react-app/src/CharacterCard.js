import React from 'react'
import Card from './components/Card'
import CardBody from './components/CardBody'
import CardImg from './components/CardImg'
import CardText from './components/CardText'
import CardTitle from './components/CardTitle'

const CharacterCard = ({ character }) => (
  <Card>
    <CardImg src={character.picture} alt={character.name} />
    <CardBody>
      <CardTitle style={{ color: character.getColor() }}>
        {character.name}
      </CardTitle>
      <CardText>{character.title}</CardText>
    </CardBody>
  </Card>
)

export default CharacterCard
