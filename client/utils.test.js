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

// const [next, setNext] = useState('consonant')

// Step 1: Check if input is a consonant ? Add to block array : return null
// Step 2: Check if input is a vowel ? Add to block array : return null
// Step 3: Add to block array. Check if input is vowel 

const [next, setNext] = useState('consonant')

export const checkInput = (char, blockArr) => {
  if (next === 'consonant') {
    setNext('vowel')
  } else if (next === 'vowel') {
    setNext('either')
  } else if (next === 'either') {
    if (blockArr.length === 1) { // dealing with after vowel
      
    } else if (blockArr.length <= 2) { // dealing with final consonant

    }
  }
  blockArr.push(char)
  return blockArr
}
