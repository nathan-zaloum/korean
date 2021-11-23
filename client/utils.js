export const consonantsArr = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ']
export const vowelsArr = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ']
export const keyboardLower = ['ㅂ', 'ㅈ', 'ㄷ', 'ㄱ', 'ㅅ', 'ㅛ', 'ㅕ', 'ㅑ', 'ㅐ', 'ㅔ', '', 'ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅎ', 'ㅗ', 'ㅓ', 'ㅏ', 'ㅣ', '', 'shift', 'ㅋ', 'ㅌ', 'ㅊ', 'ㅠ', 'ㅜ', 'ㅡ', 'ㅍ', 'undo', 'complete block']
export const keyboardUpper = ['ㅃ', 'ㅉ', 'ㄸ', 'ㄲ', 'ㅆ', 'ㅛ', 'ㅕ', 'ㅑ', 'ㅒ', 'ㅖ', '', 'ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅎ', 'ㅗ', 'ㅓ', 'ㅏ', 'ㅣ', '', 'shift', 'ㅋ', 'ㅌ', 'ㅊ', 'ㅠ', 'ㅜ', 'ㅡ', 'ㅍ', 'undo', 'complete block']

export const checkInput = (char, blockArr) => {
  switch (blockArr.length) {
    case 0:
      if (checkConsonant(char)) {
        blockArr.push(char)
      }
      return blockArr
  }
  if (blockArr.length === 0) {
    if (checkConsonant(char)) {
      blockArr.push(char)
    }
    return blockArr
  }
}

const checkConsonant = (char) => {
  if (consonantsArr.includes(char)) {
    return true
  } else {
    return false
  }
}

// const [block, setBlock] = useState([])

// VALID CHARACTER CHECKS

// check if the first is consonant
// check if the second is vowel
// check if there is at most 2 vowels in a row
// check if there is at most 2 consonants in a row after vowels
// check if there is at most 5 characters in the block

// BLOCK STRUCTURE RULES

// check if the first vowel is short or tall
// check if the block contains a double vowel
// check if the block contains a double consonant after vowels
