import React from 'react';
import { connect } from 'react-redux'
import { removeBook } from '../actions/index'
import CategoryFilter from './categoryfilter';
import { changeFilter } from '../actions/index'
import BooksForm from './booksform'
import Pagination from './Pagination.js';
import ReactLoading from 'react-loading'

class BooksList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      books: [],
      loading: false
    }
    this.fetchBooks = this.fetchBooks.bind(this)
  }

  handleFilterChange = (e) => {
    this.props.changeFilter(e.target.value)
  }

  fetchBooks() {
    this.setState({ loading: true })
    fetch(`https://secret-meadow-93147.herokuapp.com/books`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(
      (res) => {
        this.setState({
          books: res,
          loading: false
        })
      }
    )
  }

  componentDidMount(){
    this.fetchBooks()
  }

  render(){
    const filteredBooks = this.props.filter === null ? this.state.books : this.state.books.filter((book) => book.category === this.props.filter)
    const Content = () => {
      if (this.state.loading === false) {
        return (<Pagination itens={filteredBooks} handleApi={this.fetchBooks}/>)  
      } else {
        return(<ReactLoading type='bars' color='#0290ff' height={200} width={100} />)
      }
    }

    return (
      <React.Fragment>
        <CategoryFilter filterHandler={this.handleFilterChange} />
        <Content />
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
