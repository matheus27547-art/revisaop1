import React, { Children } from 'react'
import PropTypes from 'prop-types'

const Button = props => {
  return (
    <div>
        <button onClick={props.onClick}>
            {props.children}
        </button>
    </div>
  )
}

Button.propTypes = {}

export default Button