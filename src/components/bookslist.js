import React from 'react';
import { connect } from 'react-redux'
import CategoryFilter from './categoryfilter';
import { changeFilter } from '../actions/index'
import BooksForm from './booksform'
import Pagination from './Pagination.js';
import ReactLoading from 'react-loading'
import { apiUrl } from './apiUrl'

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
    fetch(`${apiUrl}/books`, {
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
      if (this.state.books.length === 0 && this.state.loading === false ) {
        return (<div className='box'><h1 className="title is-3">No books here yet :(</h1></div>)  
      } else if (this.state.books.length > 0 && this.state.loading === false) {
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
    filter: state.filterReducer.filter
  }
}

const mapDispatchToProps = {
  changeFilter: changeFilter
}


export default connect(mapStateToProps, mapDispatchToProps)(BooksList)
