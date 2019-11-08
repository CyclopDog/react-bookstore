export const CREATE_BOOK = 'CREATE_BOOK'
export const REMOVE_BOOK = 'REMOVE_BOOK'
export const CHANGE_FILTER = 'CHANGE_FILTER'

export function createBook(book) {
  return { type: CREATE_BOOK, title: book.title, category: book.category }
}

export function removeBook(book) {
  return { type: REMOVE_BOOK, id: book.id }
}

export function changeFilter(category) {
  return { type: CHANGE_FILTER, filter: category }
}