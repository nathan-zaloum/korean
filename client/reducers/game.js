import { SET_CURRENT_WORD, SET_EXPECTED, ADD_SCORE } from '../actions/index'

const initialState = {currentWord: '', expected: '', score: 0}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_WORD:
      return { currentWord: action.word, expected: state.expected, score: state.score }
    case SET_EXPECTED:
      return { currentWord: state.currentWord, expected: action.char, score: state.score }
    case ADD_SCORE:
      return { currentWord: state.currentWord, expected: state.expected, score: (state.score += 1) }
    default:
      return state
  }
}

export default reducer
