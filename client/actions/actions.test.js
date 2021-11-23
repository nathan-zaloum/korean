import { setCurrentWord, setExpected, addScore, shift } from './index'

describe('Action tests', () => {
  test('setCurrentWord action creator works', () => {
    const expected = {
      type: 'SET_CURRENT_WORD',
      word: 'test'
    }
    const actual = setCurrentWord('test')
    expect(actual).toEqual(expected)
  })
  test('setExpected action creator works', () => {
    const expected = {
      type: 'SET_EXPECTED',
      char: 'test'
    }
    const actual = setExpected('test')
    expect(actual).toEqual(expected)
  })
  test('addScore action creator works', () => {
    const expected = {
      type: 'ADD_SCORE',
    }
    const actual = addScore()
    expect(actual).toEqual(expected)
  })
  test('shift action creator works', () => {
    const expected = {
      type: 'SHIFT'
    }
    const actual = shift()
    expect(actual).toEqual(expected)
  })
})
