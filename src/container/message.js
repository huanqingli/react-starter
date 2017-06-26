/**
 * Created by Muc on 17/3/31.
 */
import { connect } from 'react-redux'

import Message from '../component/message'

const mapStateToProps = state => ({
  message: state.helloWorld.hello.get('message'),
})

export default connect(mapStateToProps)(Message)
