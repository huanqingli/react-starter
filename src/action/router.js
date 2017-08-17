import createHistory from 'history/createBrowserHistory'

export const history = createHistory({ basename: '/' })

export const PUSH_ROUTE = '@@router/PUSH_ROUTE'
export const LOCATION_CHANGE = '@@router/LOCATION_CHANGE'

export const push = (...args) => history.push(...args)
