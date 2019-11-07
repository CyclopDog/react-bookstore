import React from 'react'
import { categories } from './booksform'
import { changeFilter } from '../actions/index'
import { connect } from 'react-redux'

class CategoryFilter extends React.Component {
  handleChange = (e) => {
    this.props.changeFilter(e.target.value)
  }

  render() {
    const filters = ['All', ...categories].map((f) => <option>{f}</option>)
    return (
      <React.Fragment>
        <span>Filter: </span>
        <select onChange={this.handleChange}>
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

const mapDispatchToProps = {
  changeFilter: changeFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilter)
