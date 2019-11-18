import React from 'react'
import { createBook } from '../actions/index'
import { connect } from 'react-redux'

export const categories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"]

class BooksForm extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      title: '',
      category: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()

    if (this.state.title === '') {
      alert('Please provide a title')
    } else {
      fetch('http://em-bookstore-api.herokuapp.com/books', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          title: this.state.title,
          category: this.state.category
        })
      })
      .then(() => this.props.handleApi())
      this.setState({ title: '' })
    }
  }

  componentDidMount(){
    this.setState({category: document.querySelector('#category').value})
  }

  render() {
    const cats = categories.map((cat, i) => {
      return <option key={i} value={cat}>{cat}</option>
    })

    return (
    <React.Fragment>
      <hr />
      <h4 className="title has-text-grey is-5">Add New Book</h4>
      <form className='field is-grouped' onSubmit={this.handleSubmit}>
        <input className='input' type='text' name='title' placeholder='Book Title' value={this.state.title} onChange={this.handleChange}></input>
        <div className='select'>
          <select name='category' id='category' value={this.state.category} onChange={this.handleChange}>
            {cats}
          </select>
        </div>
        <button className='button is-info'>Add book</button>
      </form>
    </React.Fragment>
    )
  }
}

const mapDispatchToProps = {
  createBook: createBook
}

export default connect(null, mapDispatchToProps)(BooksForm)
