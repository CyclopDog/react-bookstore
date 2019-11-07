import { CHANGE_FILTER } from '../actions/index'

const initialState = {
  filter: null
}

export const filterReducer = (state = initialState, action) => {
  switch(action.type){
    case CHANGE_FILTER:
      if (action.filter !== 'All') {
        console.log(state)
        return {
          books: state.books.filter((book) => {
            return book.category === action.filter
          })
        }
      } else {
          return state
      }
    default:
      return state
  }

}
