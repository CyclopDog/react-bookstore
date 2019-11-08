import React from 'react'
import { connect } from 'react-redux'
import { removeBook } from '../actions/index'

class Book extends React.Component {

  handleDelete = (book) => {
    this.props.removeBook(book)
  }

  render() {
    const {id, title, category} = this.props.book

    return (
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{category}</td>
        <td><button onClick = { () => this.handleDelete(this.props.book) }>Remove</button></td>
      </tr>
    )
  }
}

const mapDispatchToProps = {
  removeBook: removeBook
};

export default connect(null, mapDispatchToProps)(Book)
