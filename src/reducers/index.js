import { combineReducers } from 'redux'
import { bookReducer } from './books.js'
import { filterReducer } from './filter.js'

const rootReducer = combineReducers({
  bookReducer,
  filterReducer
})

export { rootReducer }
