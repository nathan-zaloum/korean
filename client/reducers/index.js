import { combineReducers } from 'redux'

import game from './game'
import shift from './shift'

export default combineReducers({
  game,
  shift
})
