import { SET_MESSAGE } from '../actions/index'

const initialState = ''

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGE:
      return action.content
    default:
      return state
  }
}

export default reducer
