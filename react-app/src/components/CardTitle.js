import React from 'react'

const CardTitle = ({ children, ...props }) => (
  <h5 className="card-title" {...props}>
    {children}
  </h5>
)

export default CardTitle
