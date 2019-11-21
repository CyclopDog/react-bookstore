import React from 'react'
import { apiUrl } from './apiUrl'

export default class SignUp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      password_confirmation: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()

    fetch(`${apiUrl}/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        user:{
          username: this.state.username,
          password: this.state.password,
          password_confirmation: this.state.password_confirmation
        }
      })
    })
  }

  render() {
    return(
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input name='username' className='input' placeholder='username' onChange={this.handleChange} value={this.state.username} />
          <input name='password' className='input' type='password' placeholder='password' onChange={this.handleChange} value={this.state.password} />
          <input name='password_confirmation' type='password' className='input' placeholder='repeat password' onChange={this.handleChange} value={this.state.password_confirmation} />
          <button className='button is-link'>Submit</button>
        </form>
      </React.Fragment>
    )
  }
}