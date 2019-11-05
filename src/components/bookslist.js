import React from 'react';
import { store } from '../reducers/index.js'

export default class BooksList extends React.Component {

  render(){
    const books = ["book 1", "book 2"]
    const table = books.map(book => {
      return <tr><td>{book}</td></tr>
    })

    return (
      <table>
        {table}
      </table>
    )
  }
}
