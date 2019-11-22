import React from 'react'
import { apiUrl } from './apiUrl'

export default class SignUp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      errors: [],
      status: ''
    }
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
          username: document.querySelector('.user').value,
          password: document.querySelector('.pass').value,
          password_confirmation: document.querySelector('.pass2').value
        }
      })
    }).then(res => res.json())
      .then(res => this.setState({errors: res.errors, status: res.status}))
      .then(() => {
        fetch(`${apiUrl}/sessions`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            usern: {
              username: document.querySelector('.user').value
            },
            userp: {
              password: document.querySelector('.pass').value
            }
          })
        }).then(resp => resp.json())
          .then(resp => this.setState(resp))
      }).then(res => {
        if (this.state.status === 'logged') {
          document.querySelector('.user').value = ''
          document.querySelector('.pass').value = ''
          document.querySelector('.pass2').value = ''
          this.props.sendStatus(res)
        } else {
          document.querySelector('.pass').value = ''
          document.querySelector('.pass2').value = ''
        }
      })
  }

  render() {
    const errors = this.state.errors.map((error) => {
      return <div className='has-text-danger' key={this.state.errors.indexOf(error)}>{error}</div>
    })
    return(
      <React.Fragment>
        <form className='signup' onSubmit={this.handleSubmit}>
          {errors}
          <div className='field'>
            <label className='label' htmlFor='username'>Username: </label>
            <div className="control"><input name='username' className='input user' placeholder='Username' /></div>
            <p className="help">5 - 12 alphanumeric characters</p>        
          </div>
          <div className="field">            
            <label className='label' htmlFor='password'>Password: </label>
            <div className="control"><input name='password' className='input pass' type='password' placeholder='Password' /></div>
            <p className="help">minimum 6 characters</p>
          </div>          
          <div className="field">
            <label className='label' htmlFor='password_confirmation'>Repeat Password: </label>
            <div className="control"><input name='password_confirmation' type='password' className='input pass2' placeholder='Password Confirmation' /></div>
          </div>
          <button className='button is-link'>Submit</button>
        </form>
      </React.Fragment>
    )
  }
}