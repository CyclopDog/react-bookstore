import React from 'react';
import Book from './book.js'
import { connect } from 'react-redux'
import { removeBook } from '../actions/index'
class BooksList extends React.Component {

  render(){
    const table = this.props.books.map(book => {
      return <Book book={book} />
    })

    return (
      <table>
        <tbody>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
        {table}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = state => {
  return {
    books: state.bookReducer.books
  }
}

const mapDispatchToProps = {
  removeBook: removeBook
}


export default connect(mapStateToProps, mapDispatchToProps)(BooksList)
