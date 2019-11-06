import { createStore } from 'redux'
import { rootReducer } from '../reducers/index'

// const initialState = {
//   books: [
//     {
//       id:1,
//       title: "Harry Potter 1",
//       category: "Action"
//     },
//     {
//       id:2,
//       title: "Harry Potter 2",
//       category: "Action"
//     }
//   ]
// }

// const defaultReducer = (state = initialState) => {
//   return state
// }

const store = createStore(rootReducer)

export default store
