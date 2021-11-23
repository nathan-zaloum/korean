export const SET_CURRENT_WORD = 'SET_CURRENT_WORD'
export const SET_EXPECTED = 'SET_EXPECTED'
export const ADD_SCORE = 'ADD_SCORE'
export const SHIFT = 'SHIFT'

export const setCurrentWord = (word) => {
  return {
    type: SET_CURRENT_WORD,
    word
  }
}

export const setExpected = (char) => {
  return {
    type: SET_EXPECTED,
    char
  }
}

export const addScore = () => {
  return {
    type: ADD_SCORE
  }
}

export const shift = () => {
  return {
    type: SHIFT
  }
}
