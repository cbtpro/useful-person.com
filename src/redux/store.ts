import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { authTokenMiddleware } from '../middlewares/authTokenMiddleware'

import rootReducer from './rootReducer'

const middlewares = [thunk, authTokenMiddleware]

const store = createStore(rootReducer,
  compose(
    applyMiddleware(...middlewares)
  )  
)

export default store
