import React from 'react'
import { createBook } from '../actions/index'
import { connect } from 'react-redux'

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

    this.props.createBook(this.state)
    this.setState({ title: '' })
  }

  componentDidMount(){
    this.setState({category: document.querySelector('select').value})
  }

  render() {
    const categories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"]
    const cats = categories.map(cat => {
      return <option value={cat}>{cat}</option>
    })

    return (
    <form onSubmit={this.handleSubmit}>
      <input type='text' name='title' value={this.state.title} onChange={this.handleChange}></input>
      <select name='category' value={this.state.category} onChange={this.handleChange}>
        {cats}
      </select>
      <button>Submit</button>
    </form>
    )
  }
}

const mapDispatchToProps = {
  createBook: createBook
}

export default connect(null, mapDispatchToProps)(BooksForm)
