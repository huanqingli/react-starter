/**
 * Created by Muc on 17/5/26.
 */
import { combineReducers } from 'redux'

import formReducer from './form'
import helloReducer from './hello'
import worldReducer from './world'
import topReducer from './top'

const helloWorldReducer = combineReducers({ hello: helloReducer, world: worldReducer })

export default combineReducers({ helloWorld: helloWorldReducer, top: topReducer, form: formReducer })
