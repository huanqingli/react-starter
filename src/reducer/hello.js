/**
 * Created by Muc on 17/3/30.
 */
// import Immutable from 'immutable'
import { fromJS } from 'immutable'

import {
  SAY_HELLO,
} from '../action/hello'

const initialState = fromJS({
  message: 'Initial reducer message',
  messageAsync: 'Initial reducer message for async call',
})

const helloReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAY_HELLO:
      return state.set('message', action.payload)
    default:
      return state
  }
}

export default helloReducer
