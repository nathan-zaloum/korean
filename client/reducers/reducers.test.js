import gameReducer from './game'
import shiftReducer from './shift'
import messageReducer from './message'

describe('Reducer tests', () => {
  test('Ensure SET_CURRENT_WORD sets the current word in state', () => {
    const expected = {
      currentWord: { english: 'Test', romanized: 'Test', hangul: 'Test' },
      currentBlock: '',
      blockIndex: 0,
      currentInput: [],
      score: 0
    }
    const initialState = {
      currentWord: {},
      currentBlock: '',
      blockIndex: 0,
      currentInput: [],
      score: 0
    }
    const action = {
      type: 'SET_CURRENT_WORD',
      word: { english: 'Test', romanized: 'Test', hangul: 'Test' }
    }
    const actual = gameReducer(initialState, action)
    expect(actual).toEqual(expected)
  })
  test('Ensure SET_BLOCK_INDEX sets the current block index in state', () => {
    const expected = {
      currentWord: { english: 'Test', romanized: 'Test', hangul: 'Test' },
      currentBlock: 'e',
      blockIndex: 1,
      currentInput: [],
      score: 0
    }
    const initialState = {
      currentWord: { english: 'Test', romanized: 'Test', hangul: 'Test' },
      currentBlock: 'T',
      blockIndex: 0,
      currentInput: [],
      score: 0
    }
    const action = {
      type: 'SET_BLOCK_INDEX',
      index: 1
    }
    const actual = gameReducer(initialState, action)
    expect(actual).toEqual(expected)
  })
  test('Ensure SET_CURRENT_INPUT sets the current block index in state', () => {
    const expected = {
      currentWord: {},
      currentBlock: '',
      blockIndex: 0,
      currentInput: ['Test'],
      score: 0
    }
    const initialState = {
      currentWord: {},
      currentBlock: '',
      blockIndex: 0,
      currentInput: [],
      score: 0
    }
    const action = {
      type: 'SET_CURRENT_INPUT',
      array: ['Test']
    }
    const actual = gameReducer(initialState, action)
    expect(actual).toEqual(expected)
  })
  test('Ensure ADD_SCORE adds one to the current state', () => {
    const expected = {
      currentWord: {},
      currentBlock: '',
      blockIndex: 0,
      currentInput: [],
      score: 1
    }
    const initialState = {
      currentWord: {},
      currentBlock: '',
      blockIndex: 0,
      currentInput: [],
      score: 0
    }
    const action = {
      type: 'ADD_SCORE'
    }
    const actual = gameReducer(initialState, action)
    expect(actual).toEqual(expected)
  })
  test('Ensure SET_NEW_WORD sets the current block index in state', () => {
    const expected = {
      currentWord: { english: 'Test Post', romanized: 'Test Post', hangul: 'Test Post' },
      currentBlock: 'T',
      blockIndex: 0,
      currentInput: [],
      score: 0
    }
    const initialState = {
      currentWord: { english: 'Test Pre', romanized: 'Test Pre', hangul: 'Test Pre' },
      currentBlock: 'e',
      blockIndex: 7,
      currentInput: ['e'],
      score: 0
    }
    const action = {
      type: 'SET_NEW_WORD',
      word: { english: 'Test Post', romanized: 'Test Post', hangul: 'Test Post' }
    }
    const actual = gameReducer(initialState, action)
    expect(actual).toEqual(expected)
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
  test('Ensure SET_MESSAGE changes the state to the message content', () => {
    const expected = 'Test Message'
    const initialState = 'Test Initial'
    const action = {
      type: 'SET_MESSAGE',
      content: 'Test Message'
    }
    const actual = messageReducer(initialState, action)
    expect(actual).toEqual(expected)
  })
})
