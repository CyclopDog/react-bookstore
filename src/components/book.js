import React from 'react'
import PropTypes from 'prop-types'

export class Book extends React.Component {
  propTypes = {
    book: PropTypes.object
  }

  render() {
    return (
      <tr><td>{this.props.book.id}</td><td>{this.props.book.name}</td><td>{this.props.book.category}</td></tr>
    )
  }
}
