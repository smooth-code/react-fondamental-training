import React from 'react'

const FormGroup = ({ children, ...props }) => (
  <div className="form-group" {...props}>
    {children}
  </div>
)

export default FormGroup
