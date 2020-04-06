import { combineReducers } from 'redux'

import demo from './demo'
import userInfo from './userInfo'
import appSetting from './app'

const reducers = {
  demo,
  appSetting,
  userInfo
}

export default combineReducers(reducers)