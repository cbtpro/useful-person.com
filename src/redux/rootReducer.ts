import { combineReducers } from 'redux'

import demo from './demo'
import userInfo from './userInfo'

const reducers = {
  demo,
  userInfo
}

export default combineReducers(reducers)