/**
 * Created by Muc on 17/3/31.
 */
import {
  sayHello,
} from '../action/hello'

import helloReducer from './hello'

let helloState

beforeEach(() => {
  helloState = helloReducer(undefined, {})
})

test('handle default', () => {
  expect(helloState.get('message')).toBe('Initial reducer message')
  expect(helloState.get('messageAsync')).toBe('Initial reducer message for async call')
})

test('handle SAY_HELLO', () => {
  helloState = helloReducer(helloState, sayHello('Test'))
  expect(helloState.get('message')).toBe('Test')
})

