import React from 'react'
import { categories } from './booksform'
import { changeFilter } from '../actions/index'
import { connect } from 'http2'

class CategoryFilter extends React.Component {
  handleChange = (e) => {
    changeFilter(e.target.value)
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

const mapDispatchToProps = {
  changeFilter: changeFilter
}

export default connect(null, mapDispatchToProps)(CategoryFilter)