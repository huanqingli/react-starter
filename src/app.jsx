import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { APP_NAME } from './config'
import Nav from './component/nav'
import HomePage from './page/home'
import FormPage from './container/form'
import HelloPage from './page/hello'
import NotFoundPage from './page/not-found'
import {
  HOME_PAGE_ROUTE,
  FORM_PAGE_ROUTE,
  HELLO_PAGE_ROUTE,
} from './routes'

const App = () =>
  <div>
    <h1 className="test-style">{APP_NAME}</h1>
    <Nav />
    <Switch>
      <Route exact path={HOME_PAGE_ROUTE} render={() => <HomePage />} />
      <Route path={FORM_PAGE_ROUTE} render={() => <FormPage />} />
      <Route path={HELLO_PAGE_ROUTE} render={() => <HelloPage />} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>

export default App
