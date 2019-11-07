export const CREATE_BOOK = 'CREATE_BOOK'
export const REMOVE_BOOK = 'REMOVE_BOOK'

export function createBook(book) {
  return { type: CREATE_BOOK, title: book.title, category: book.category }
}

export function removeBook(book) {
  return { type: REMOVE_BOOK, id: book.id }
}