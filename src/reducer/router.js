import { fromJS } from 'immutable'

import { LOCATION_CHANGE } from '../action/router'

const initialState = fromJS({
  location: null,
})

const routerReducer = (state = initialState, action = {}) => {
  if (action.type === LOCATION_CHANGE) {
    return state.set('location', action.payload)
  }
  return state
}

export default routerReducer
