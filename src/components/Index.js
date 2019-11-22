import React from 'react'
import SignUp from './SignUp'
import Booklist from './Bookslist'

export default class Index extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      status: ''
    }
  }

  setStatus = (status) => {
    this.setState({status: status})
  }

  render(){
    const Content = () => {
      switch (this.state.status) {
        case 'signuperr':
          return <SignUp sendStatus={this.setStatus} />

        case 'logged':
          return <Booklist sendStatus={this.setStatus} />
      
        default:
          return <SignUp sendStatus={this.setStatus} />
      }
    }
    return(
      <Content />
    )
  }
}