import { helloEndpointRoute } from '../routes'

export const SAY_HELLO = 'SAY_HELLO'
// export const SAY_HELLO_ASYNC_REQUEST = 'SAY_HELLO_ASYNC_REQUEST'
// export const SAY_HELLO_ASYNC_SUCCESS = 'SAY_HELLO_ASYNC_SUCCESS'
// export const SAY_HELLO_ASYNC_FAILURE = 'SAY_HELLO_ASYNC_FAILURE'

export const sayHello = payload => ({ type: SAY_HELLO, payload })

// export const sayHelloAsyncRequest = function () {
//   return { type: SAY_HELLO_ASYNC_REQUEST }
// }
//
// export const sayHelloAsyncSuccess = function (payload) {
//   return { type: SAY_HELLO_ASYNC_SUCCESS, payload }
// }
//
// export const sayHelloAsyncFailure = function () {
//   return { type: SAY_HELLO_ASYNC_FAILURE }
// }
//
// export const sayHelloAsync = num => (dispatch) => {
//   dispatch(sayHelloAsyncRequest())
//   return fetch(helloEndpointRoute(num), { method: 'GET', header: { 'X-UA-Compatible': 'IE=Edge,chrome=1' } })
//     .then((res) => {
//       if (!res.ok) throw Error(res.statusText)
//       return res.json()
//     })
//     .then((data) => {
//       if (!data.serverMessage) throw Error('No message received')
//       dispatch(sayHelloAsyncSuccess(data.serverMessage))
//     })
//     .catch(() => {
//       dispatch(sayHelloAsyncFailure())
//     })
// }
// 一个异步action
