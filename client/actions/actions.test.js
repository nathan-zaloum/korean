import { setCurrentWord, setBlockIndex, setCurrentInput, addScore, setNewWord, shift } from './index'

describe('Action tests', () => {
  test('setCurrentWord action creator works', () => {
    const expected = {
      type: 'SET_CURRENT_WORD',
      word: 'test'
    }
    const actual = setCurrentWord('test')
    expect(actual).toEqual(expected)
  })
  test('setBlockIndex action creator works', () => {
    const expected = {
      type: 'SET_BLOCK_INDEX',
      index: 1
    }
    const actual = setBlockIndex(1)
    expect(actual).toEqual(expected)
  })
  test('setCurrentInput action creator works', () => {
    const expected = {
      type: 'SET_CURRENT_INPUT',
      array: []
    }
    const actual = setCurrentInput([])
    expect(actual).toEqual(expected)
  })
  test('addScore action creator works', () => {
    const expected = {
      type: 'ADD_SCORE',
    }
    const actual = addScore()
    expect(actual).toEqual(expected)
  })
  test('setNewWord action creator works', () => {
    const expected = {
      type: 'SET_NEW_WORD',
      word: 'Test'
    }
    const actual = setNewWord('Test')
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
