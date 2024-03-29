import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index'

const initialState = {
  books: [
    {
      id:1,
      title: "Harry Potter Prisoners of Caban",
      category: "Action"
    },
    {
      id:2,
      title: "Harry Potter Archbishop of Luton",
      category: "Horror"
    },
    {
      id:3,
      title: "Harry Potter King of Scotland",
      category: "Action"
    }
  ]
}

const bookReducer = (state = initialState, action) => {
  switch (action.type){
    case CREATE_BOOK:
    const randId = Math.floor(Math.random()*9999)
      return {
        books: [...state.books, {
          id: randId,
          title: action.title,
          category: action.category
        }]
      }

      case REMOVE_BOOK:
        return {
            books: state.books.filter((book) => {
              return book.id !== action.id
            }
          )
        }

    default:
      return state
  }
}

export { bookReducer }
