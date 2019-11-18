import React from 'react';
import { connect } from 'react-redux'
import { removeBook } from '../actions/index'
import CategoryFilter from './categoryfilter';
import { changeFilter } from '../actions/index'
import BooksForm from './booksform'
import Pagination from './Pagination.js';
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
    fetch("http://em-bookstore-api.herokuapp.com/books")
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

    return (
      <React.Fragment>
        <CategoryFilter filterHandler={this.handleFilterChange} />
        <Pagination itens={filteredBooks} handleApi={this.fetchBooks}/>
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
