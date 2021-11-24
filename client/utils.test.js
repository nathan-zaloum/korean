import { wordArray, randomWord, charType } from './utils'

describe('Character check tests', () => {
  test.todo('checks the first input character is a consonant')
  test.todo('checks the second input character is a vowel')
  test.todo('checks if there are already two vowels if the input character is a vowel')
  test.todo('checks if there are already two consonants if the input character is a consonant')
  test.todo('checks if the block has reached five characters')
})

describe('Block layout tests', () => {
  test.todo('checks if the first vowel is tall or short')
  test.todo('checks if the block contains a double vowel')
  test.todo('checks if the block contains a double consonant')
})

describe('Utils.js function tests', () => {
  test('randomWord returns a word from wordArray', () => {
    const expected = wordArray
    const actual = randomWord()
    expect(expected).toContain(actual)
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
})
