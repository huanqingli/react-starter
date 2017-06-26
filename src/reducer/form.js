/**
 * Created by Muc on 17/6/15.
 */
import { fromJS } from 'immutable'

import {
  ON_FIRST_NAME_CHANGE,
  ON_LAST_NAME_CHANGE,
  ON_EMAIL_CHANGE,
} from '../action/form'

const initialState = fromJS({
  firstName: '',
  lastName: '',
  email: '',
})

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_FIRST_NAME_CHANGE:
      return state.set('firstName', action.payload)
    case ON_LAST_NAME_CHANGE:
      return state.set('lastName', action.payload)
    case ON_EMAIL_CHANGE:
      return state.set('email', action.payload)
    default:
      return state
  }
}

export default formReducer
