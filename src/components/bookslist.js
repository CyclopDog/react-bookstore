import React from 'react';
import Book from './book.js'
import { connect } from 'react-redux'
import { removeBook } from '../actions/index'
import CategoryFilter from './categoryfilter';
import { changeFilter } from '../actions/index'
import BooksForm from './booksform'
class BooksList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      books: []
    }
    this.fetchBooks = this.fetchBooks.bind(this)
  }

  handleFilterChange = (e) => {
    this.props.changeFilter(e.target.value)
  }

  fetchBooks() {
    fetch("http://localhost:3000/books")
    .then(res => res.json())
    .then(
      (res) => {
        this.setState({
          books: res
        })
      }
    )
  }

  componentDidMount(){
    this.fetchBooks()
  }

  render(){
    const filteredBooks = this.props.filter === null ? this.state.books : this.state.books.filter((book) => book.category === this.props.filter)
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
        <BooksForm handleApi={this.fetchBooks}/>
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
