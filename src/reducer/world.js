/**
 * Created by Muc on 17/5/26.
 */
import { fromJS } from 'immutable'

import {
  SAY_WORLD,
} from '../action/world'

const initialState = fromJS({
  message: 'Initial reducer message',
  messageAsync: 'Initial reducer message for async call',
})

const worldReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAY_WORLD:
      return state.set('message', action.payload)
    default:
      return state
  }
}

export default worldReducer
