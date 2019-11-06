import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index'

const initialState = {
  books: []
}

const bookReducer = (state = initialState, action) => {
  switch (action.type){
    case CREATE_BOOK:
      return {
        books: [...state.books, {
          title: action.title,
          category: action.category
        }]
      }

      case REMOVE_BOOK:
        return action.info

    default:
      return state
  }
}

export { bookReducer }
