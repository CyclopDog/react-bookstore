import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { removeBook } from '../actions/index'

class Book extends React.Component {
  propTypes = {
    book: PropTypes.object
  }

  render() {
    return (
      <tr>
        <td>{this.props.book.id}</td>
        <td>{this.props.book.name}</td>
        <td>{this.props.book.category}</td>
        <td><button>Remove</button></td>
      </tr>
    )
  }
}

const mapDispatchToProps = {
  removeBook: removeBook
};

export default connect(null, mapDispatchToProps)(Book)
