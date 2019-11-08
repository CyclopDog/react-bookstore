import React from 'react'
import { categories } from './booksform'
import { connect } from 'react-redux'

class CategoryFilter extends React.Component {

  render() {
    const filters = ['All', ...categories].map((f,i) => <option key={i}>{f}</option>)
    return (
      <React.Fragment>
        <span>Filter: </span>
        <select onChange={this.props.filterHandler}>
          {filters}
        </select>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    books: state.bookReducer.books
  }
}

export default connect(mapStateToProps, null)(CategoryFilter)
