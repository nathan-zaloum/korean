import { SET_CURRENT_WORD, SET_CURRENT_BLOCK, SET_BLOCK_INDEX, SET_CURRENT_INPUT, ADD_SCORE } from '../actions/index'

const initialState = { currentWord: {}, currentBlock: '', blockIndex: 0, currentInput: [], score: 0 }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_WORD:
      return { ...state, currentWord: action.word }
    case SET_CURRENT_BLOCK:
      return { ...state, currentBlock: action.char }
    case SET_BLOCK_INDEX:
      return { ...state, blockIndex: action.index, currentBlock: state.currentWord.hangul.charAt(action.index) }
    case SET_CURRENT_INPUT:
      return { ...state, currentInput: action.array }
    case ADD_SCORE:
      return { ...state, score: (state.score += 1) }
    default:
      return state
  }
}

export default reducer
