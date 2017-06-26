
import React from 'react'

// const Message = ({ message }) =>
//   <p>{message}</p>
const Message = props =>
  <p>{props.message}</p>

Message.defaultProps = {
  message: '',
}

Message.propTypes = {
  message: React.PropTypes.string,
}

export default Message
