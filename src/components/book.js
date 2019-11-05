import React from 'react'
import PropTypes from 'prop-types'

export default class Book extends React.Component {
  propTypes = {
    book: PropTypes.object
  }

  render() {
    return (
      <tr><td>{this.props.id}</td><td>{this.props.name}</td><td>{this.props.category}</td></tr>
    )
  }
}
