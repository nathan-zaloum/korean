import { combineReducers } from 'redux'

import game from './game'
import shift from './shift'
import message from './message'

export default combineReducers({
  game,
  shift,
  message
})
