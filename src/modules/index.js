import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import abilities from './abilities'
import quests from './quests'

export default combineReducers({
  router: routerReducer,
  counter,
  abilities,
  quests
})
