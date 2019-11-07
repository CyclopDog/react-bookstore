import React from 'react';
import Book from './book.js'
import { connect } from 'react-redux'

class BooksList extends React.Component {

  render(){
    const table = this.props.books.map(book => {
      return <Book book={book} />
    })

    return (
      <table>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
        {table}
      </table>
    )
  }
}

const mapStateToProps = state => {
  return {
    books: state.bookReducer.books
  };
};


export default connect(mapStateToProps, null)(BooksList)
