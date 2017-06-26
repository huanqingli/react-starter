/**
 * Created by Muc on 17/3/31.
 */
import { connect } from 'react-redux'

import { sayHelloAsync } from '../action/hello'
import Button from '../component/button'

const mapStateToProps = () => ({
  label: 'Say hello asynchronously and send XXX',
})

const mapDispatchToProps = dispatch => ({
  handleClick: () => { dispatch(sayHelloAsync(12345)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
