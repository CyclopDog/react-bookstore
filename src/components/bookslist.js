import React from 'react';
import { store } from '../reducers/index.js'

export default class BooksList extends React.Component {

  render(){
    const books = ["book 1", "book 2"]
    const table = books.map(book => {
      return <tr><td>1</td><td>{book}</td><td>Redux</td></tr>
    })

    return (
      <table>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
        {table}
      </table>
    )
  }
}
