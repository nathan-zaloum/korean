import { wordArray, randomWord, charType, disassemble, assemble, vowelType, stringToArray } from './utils'

describe('Utils.js function tests', () => {
  test('randomWord returns a word from wordArray', () => {
    const actual = randomWord()
    expect(wordArray).toContain(actual)
  })
  test('charType checks if the character is a consonant or a vowel', () => {
    const expected = {
      consonant: 'consonant',
      vowel: 'vowel'
    }
    const actual = {
      consonant: charType('ㄱ'),
      vowel: charType('ㅏ')
    }
    expect(actual.consonant).toEqual(expected.consonant)
    expect(actual.vowel).toEqual(actual.vowel)
  })
  test('vowelType checks if the character is a short vowel or a tall vowel', () => {
    const expected = {
      short: 'short',
      tall: 'tall'
    }
    const actual = {
      short: vowelType('ㅔ'),
      tall: vowelType('ㅜ')
    }
    expect(actual.short).toEqual(expected.short)
    expect(actual.tall).toEqual(actual.tall)
  })
  test('stringToArray converts a string into an array of individual characters', () => {
    const expected = ['T', 'e', 's', 't']
    const actual = stringToArray('Test')
    expect(actual).toEqual(expected)
  })
  test('disassemble returns an array of individuals letters', () => {
    const expected = ['ㅇ', 'ㅏ', 'ㄴ', 'ㄴ', 'ㅕ', 'ㅇ', 'ㅎ', 'ㅏ', 'ㅅ', 'ㅔ', 'ㅇ', 'ㅛ']
    const input = '안녕하세요'
    const actual = disassemble(input)
    expect(expected).toEqual(actual)
  })
  test('assemble returns a string of blocks', () => {
    const expected = '안녕하세요'
    const input = ['ㅇ', 'ㅏ', 'ㄴ', 'ㄴ', 'ㅕ', 'ㅇ', 'ㅎ', 'ㅏ', 'ㅅ', 'ㅔ', 'ㅇ', 'ㅛ']
    const actual = assemble(input)
    expect(expected).toEqual(actual)
  })
})
