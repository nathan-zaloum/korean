import { SHIFT } from '../actions/index'

const initialState = false

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHIFT:
      return !state
    default:
      return state
  }
}

export default reducer
