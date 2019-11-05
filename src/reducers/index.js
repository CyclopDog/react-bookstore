import { combineReducers, createStore } from 'redux'
import { bookReducer } from './books.js'

const rootReducer = combineReducers({
  bookReducer
})
const store = createStore(rootReducer)

export { store }
