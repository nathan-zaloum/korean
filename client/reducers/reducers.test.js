import gameReducer from './game'
import shiftReducer from './shift'

describe('Reducer tests', () => {
  test('Ensure SET_CURRENT_WORD sets the current word in state', () => {
    const expected = {
      currentWord: 'test new',
      expected: 'test default',
      score: 0
    }
    const initialState = {
      currentWord: 'test default',
      expected: 'test default',
      score: 0
    }
    const action = {
      type: 'SET_CURRENT_WORD',
      word: 'test new'
    }
    const actual = gameReducer(initialState, action)
    expect(actual.currentWord).toEqual(expected.currentWord)
    expect(actual.expected).toEqual(expected.expected)
    expect(actual.score).toEqual(expected.score)
  })
  test('Ensure SET_EXPECTED sets the expected word in state', () => {
    const expected = {
      currentWord: 'test default',
      expected: 'test new',
      score: 0
    }
    const initialState = {
      currentWord: 'test default',
      expected: 'test default',
      score: 0
    }
    const action = {
      type: 'SET_EXPECTED',
      char: 'test new'
    }
    const actual = gameReducer(initialState, action)
    expect(actual.currentWord).toEqual(expected.currentWord)
    expect(actual.expected).toEqual(expected.expected)
    expect(actual.score).toEqual(expected.score)
  })
  test('Ensure ADD_SCORE adds one to the current state', () => {
    const expected = {
      currentWord: 'test default',
      expected: 'test default',
      score: 1
    }
    const initialState = {
      currentWord: 'test default',
      expected: 'test default',
      score: 0
    }
    const action = {
      type: 'ADD_SCORE'
    }
    const actual = gameReducer(initialState, action)
    expect(actual.currentWord).toEqual(expected.currentWord)
    expect(actual.expected).toEqual(expected.expected)
    expect(actual.score).toEqual(expected.score)
  })
  test('Ensure SHIFT switches the state to its opposite', () => {
    const expected = true
    const initialState = false
    const action = {
      type: 'SHIFT'
    }
    const actual = shiftReducer(initialState, action)
    expect(actual).toEqual(expected)
  })
})
