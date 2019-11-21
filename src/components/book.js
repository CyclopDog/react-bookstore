import React from 'react'
import { connect } from 'react-redux'
import { removeBook } from '../actions/index'
import { apiUrl } from './apiUrl'

class Book extends React.Component {

  handleDelete = (book) => {
    fetch(`${apiUrl}/books/${book.id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      }
    })
    .then(() => this.props.handleApi())
  }

  render() {
    const {title, category} = this.props.book

    return (
      <tr className="box">
        <td className="is-size-5 has-text-grey">{category}</td>
        <td className="title is-4">{title}</td>
        <td><button className='button is-danger is-outlined is-small' onClick = { () => this.handleDelete(this.props.book) }>Remove</button></td>
      </tr>
    )
  }
}

const mapDispatchToProps = {
  removeBook: removeBook
};

export default connect(null, mapDispatchToProps)(Book)
