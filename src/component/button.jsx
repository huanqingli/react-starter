import React from 'react'

const Button = ({ label, handleClick }) =>
  <button onClick={handleClick}>{label}</button>

Button.defaultProps = {
  label: '',
  handleClick: () => { },
}

Button.propTypes = {
  label: React.PropTypes.string,
  handleClick: React.PropTypes.func,
}

export default Button

