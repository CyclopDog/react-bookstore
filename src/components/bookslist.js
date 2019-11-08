import React from 'react';
import Book from './book.js'
import { connect } from 'react-redux'
import { removeBook } from '../actions/index'
import CategoryFilter from './categoryfilter';
import { changeFilter } from '../actions/index'
class BooksList extends React.Component {

  handleFilterChange = (e) => {
    this.props.changeFilter(e.target.value)
  }

  render(){
    const filteredBooks = this.props.filter === null ? this.props.books : this.props.books.filter((book) => book.category === this.props.filter)
    const table = filteredBooks.map((book, i) => {
      return <Book key={i} book={book} />
    })

    return (
      <React.Fragment>
        <CategoryFilter filterHandler={this.handleFilterChange} />
        <table>
          <tbody>
          {table}
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    books: state.bookReducer.books,
    filter: state.filterReducer.filter
  }
}

const mapDispatchToProps = {
  removeBook: removeBook,
  changeFilter: changeFilter
}


export default connect(mapStateToProps, mapDispatchToProps)(BooksList)
