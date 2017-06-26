/**
 * Created by Muc on 17/5/26.
 */
import { fromJS } from 'immutable'

import {
  SAY_TOP,
} from '../action/top'

const initialState = fromJS({
  message: 'Initial reducer message',
  messageAsync: 'Initial reducer message for async call',
})

const topReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAY_TOP:
      return state.set('message', action.payload)
    default:
      return state
  }
}

export default topReducer
