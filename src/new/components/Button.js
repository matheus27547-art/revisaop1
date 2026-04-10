import React, { Children } from 'react'
import PropTypes from 'prop-types'

const Button = props => {
  return (
    <div>
        <button onClick={props.onClick}>
            {props.Children}
        </button>
    </div>
  )
}

Button.propTypes = {}

export default Button