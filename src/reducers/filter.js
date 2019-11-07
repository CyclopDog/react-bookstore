
const initialState = {
  filter: null
}

export const filterReducer = (state = initialState, action) => {
  if (action.filter !== 'All') {
    return {
      books: state.books.filter((book) => {
        return book.category === action.filter
      }
    }
  }
  return state
}