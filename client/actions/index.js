export const SET_CURRENT_WORD = 'SET_CURRENT_WORD'
export const SET_BLOCK_INDEX = 'SET_BLOCK_INDEX'
export const SET_CURRENT_INPUT = 'SET_CURRENT_INPUT'
export const ADD_SCORE = 'ADD_SCORE'
export const SET_NEW_WORD = 'SET_NEW_WORD'
export const SHIFT = 'SHIFT'

export const setCurrentWord = (word) => {
  return {
    type: SET_CURRENT_WORD,
    word
  }
}

export const setBlockIndex = (index) => {
  return {
    type: SET_BLOCK_INDEX,
    index
  }
}

export const setCurrentInput = (array) => {
  return {
    type: SET_CURRENT_INPUT,
    array
  }
}

export const addScore = () => {
  return {
    type: ADD_SCORE
  }
}

export const setNewWord = (word) => {
  return {
    type: SET_NEW_WORD,
    word
  }
}

export const shift = () => {
  return {
    type: SHIFT
  }
}
