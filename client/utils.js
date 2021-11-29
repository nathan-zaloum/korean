const Hangul = require('hangul-js')

export const consonantsArr = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ']
export const vowelsArr = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ']
export const vowelShort = ['ㅏ', 'ㅑ', 'ㅐ', 'ㅒ', 'ㅓ', 'ㅕ', 'ㅔ', 'ㅖ', 'ㅣ']
export const vowelTall = ['ㅗ', 'ㅛ', 'ㅜ', 'ㅠ', 'ㅡ']
export const keyboardLower = ['ㅂ', 'ㅈ', 'ㄷ', 'ㄱ', 'ㅅ', 'ㅛ', 'ㅕ', 'ㅑ', 'ㅐ', 'ㅔ', '', 'ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅎ', 'ㅗ', 'ㅓ', 'ㅏ', 'ㅣ', '', 'shift', 'ㅋ', 'ㅌ', 'ㅊ', 'ㅠ', 'ㅜ', 'ㅡ', 'ㅍ', 'undo', 'complete block']
export const keyboardUpper = ['ㅃ', 'ㅉ', 'ㄸ', 'ㄲ', 'ㅆ', 'ㅛ', 'ㅕ', 'ㅑ', 'ㅒ', 'ㅖ', '', 'ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅎ', 'ㅗ', 'ㅓ', 'ㅏ', 'ㅣ', '', 'shift', 'ㅋ', 'ㅌ', 'ㅊ', 'ㅠ', 'ㅜ', 'ㅡ', 'ㅍ', 'undo', 'complete block']

export const wordArray = [
  { english: 'yes',          romanized: 'ne',             hangul: '네'         },
  { english: 'yes',          romanized: 'ye',             hangul: '예'         },
  { english: 'no',           romanized: 'aniyo',          hangul: '아니오'      },
  { english: 'ok',           romanized: 'gwaenchanayo',   hangul: '괜찮아요'     },
  { english: 'hello',        romanized: 'annyeonghaseyo', hangul: '안녕하세요'   },
  { english: 'please',       romanized: 'juseyo',         hangul: '주세요'      },
  { english: 'thank you',    romanized: 'gamsahamnida',   hangul: '감사합니다' },
  { english: 'thank you',    romanized: 'gomawoyo',       hangul: '고마워요'     },
  { english: 'your welcome', romanized: 'cheonmaneyo',    hangul: '천만에요'     },
  { english: 'excuse me',    romanized: 'sillyehamnida',  hangul: '실례합니다'   },
  { english: 'sorry',        romanized: 'joesonghamnida', hangul: '죄송합니다'   },
  { english: 'sorry',        romanized: 'mianhamnida',    hangul: '미안합니다'   },
  { english: 'sorry',        romanized: 'mianhe',         hangul: '미안해'      }
]

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

export const compareBlock = (input, compare) => {
  if (assemble(input) === compare) {
    return true
  } else {
    return false
  }
}

export const randomWord = (arr = wordArray) => {
  return arr[Math.floor(Math.random() * wordArray.length)]
}

export const charType = (char) => {
  if (consonantsArr.includes(char)) {
    return 'consonant'
  } else {
    return 'vowel'
  }
}

export const vowelType = (char) => {
  if (vowelShort.includes(char)) {
    return 'short'
  } else {
    return 'tall'
  }
}

export const stringToArray = (str) => {
  return str.split('')
}

export const disassemble = (input) => {
  return Hangul.disassemble(input)
}

export const assemble = (input) => {
  return Hangul.assemble(input)
}
