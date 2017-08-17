/**
 * Created by Muc on 17/5/26.
 */
import { combineReducers } from 'redux'

import routerReducer from './router'
import formReducer from './form'
import helloReducer from './hello'
import worldReducer from './world'
import topReducer from './top'

const helloWorldReducer = combineReducers({ hello: helloReducer, world: worldReducer })

export default combineReducers({
  router: routerReducer,
  helloWorld: helloWorldReducer,
  top: topReducer,
  form: formReducer,
})
