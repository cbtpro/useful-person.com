import { combineReducers } from 'redux'

import demo from './demo'
import userInfo from './userInfo'
import appSettings from './appSettings'

const reducers = {
  demo,
  appSettings,
  userInfo
}

export default combineReducers(reducers)