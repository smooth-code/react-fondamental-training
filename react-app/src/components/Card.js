import React from 'react'

const Card = ({ children, ...props }) => (
  <div className="card" {...props}>
    {children}
  </div>
)

export default Card
