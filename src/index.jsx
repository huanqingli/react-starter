import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { persistStore, autoRehydrate } from 'redux-persist'
import { asyncSessionStorage } from 'redux-persist/storages'
import immutableTransform from 'redux-persist-transform-immutable'
import { Router } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'

import App from './app'
import rootReducer from './reducer'
import { APP_CONTAINER_CLASS } from './config'
import { LOCATION_CHANGE, history } from './action/router'

import './css/global.css'
import './css/config.css'

// 搭配redux-dev-tools插件,如果有的话
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware), autoRehydrate()),
)

persistStore(store, { storage: asyncSessionStorage, transforms: [immutableTransform()] })

// 链接 history(router) 与 redux
store.dispatch({
  type: LOCATION_CHANGE,
  payload: history.location,
})
history.listen((location) => {
  store.dispatch({
    type: LOCATION_CHANGE,
    payload: location,
  })
})

const rootEl = document.querySelector(APP_CONTAINER_CLASS)

const wrapApp = RootApp =>
  <Provider store={store}>
    <Router history={history}>
      <RootApp />
    </Router>
  </Provider>

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      {wrapApp(Component)}
    </AppContainer>,
    rootEl,
  )
}

render(App)


// 模块热替换的 API
if (module.hot) {
  module.hot.accept('./app', () => {
    render(App)
  })
}
