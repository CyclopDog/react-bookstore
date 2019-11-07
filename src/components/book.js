import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { removeBook } from '../actions/index'

class Book extends React.Component {
  propTypes = {
    book: PropTypes.object
  }

  render() {
    const {id, title, category} = this.props.book
  
    return (
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{category}</td>
        <td><button>Remove</button></td>
      </tr>
    )
  }
}

const mapDispatchToProps = {
  removeBook: removeBook
};

export default connect(null, mapDispatchToProps)(Book)
