import React from 'react'
import Book from './book'

export default class Content extends React.Component {
  render() {
    const qty = this.props.page.perPage - 1
    const page = this.props.page.page
    const itens = this.props.itens.slice(qty * page - qty + page - 1, page * qty + page)
  
    const content = itens.map(book => {
      return <Book key={book.id} book={book} handleApi={this.props.handleApi} />
    })

    const Holder = () => {
      return (
        <table>
          <tbody>
            {content}
          </tbody>  
        </table>
      )
    }
    return (<Holder />)
  }
}