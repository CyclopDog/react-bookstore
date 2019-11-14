import React from 'react'
import Content from './PaginationContent'

export default class Pagination extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      page: 1,
      perPage: 6
    }
  }

  handlePage = (e) => {
    switch (e.target.innerHTML) {
      case 'Previous':
        if (this.state.page > 1) {
          this.setState({page: this.state.page - 1}) 
        }
        break;

        case 'Next page':
            if (this.state.page < Math.ceil(this.props.itens.length / this.state.perPage)) {
              this.setState({page: this.state.page + 1}) 
            }
            break;
    
      default:
          this.setState({
            page: parseInt(e.target.innerHTML)
          })
        break;
    }    
  }

  render(){

    const maxPages = Math.ceil(this.props.itens.length / this.state.perPage)
    const pageCounter = []
    for (let i = 1; i <= maxPages; i++) {
      pageCounter.push(i)
    }
    const totalPages = pageCounter.map(p => {
      if (this.state.page === p) {
        return (
          <li key={pageCounter.indexOf(p)}><div name={p} className='pagination-link is-current' onClick={this.handlePage}>{p}</div></li>
        )
      } else {
        return (
          <li key={pageCounter.indexOf(p)}><div name={p} className='pagination-link' onClick={this.handlePage}>{p}</div></li>
        )
      }
    })

    const Navbar = () => {
      return(
        <nav className="pagination is-centered" role="navigation" aria-label="pagination">
          <div className="pagination-previous" onClick={this.handlePage}>Previous</div>
          <div className="pagination-next" onClick={this.handlePage}>Next page</div>
          <ul className="pagination-list">
            {totalPages}
          </ul>
        </nav>
      )
    }

    const Paginate = () => {
      return (
        <React.Fragment>
          <Content page={this.state} itens={this.props.itens} handleApi={this.props.handleApi} />
          <Navbar />
        </React.Fragment>
      )
    }
    return ( <Paginate /> )
  }
}
