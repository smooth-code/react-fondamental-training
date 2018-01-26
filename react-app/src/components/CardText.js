import React from 'react'

const CardText = ({ children, ...props }) => (
  <p className="card-text" {...props}>
    {children}
  </p>
)

export default CardText
