import { combineReducers } from 'redux'
import { bookReducer } from './books.js'

const rootReducer = combineReducers({
  bookReducer
})

export { rootReducer }
