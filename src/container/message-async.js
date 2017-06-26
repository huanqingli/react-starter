/**
 * Created by Muc on 17/3/31.
 */
import { connect } from 'react-redux'

import MessageAsync from '../component/message'

const mapStateToProps = state => ({
  message: state.helloWorld.hello.get('messageAsync'),
})

export default connect(mapStateToProps)(MessageAsync)
