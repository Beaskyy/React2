import React, { Component } from 'react'

export class UserGreeting extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: true
    }
  }
  
  render() {
    return this.state.isLoggedIn && <div>Welcome Beasky</div>

    // return (
    // this.state.isLoggedIn ?
    // <div>Welcome Beasky</div> :
    // <div>Welcome Guest</div>
    // )

    // let message;
    // if(this.state.isLoggedIn) {
    //   message = <div>Welcome Beasky</div>
    // } else {
    //   message = <div>Welcome Guest</div>
    // }
    // return <div>{message}</div>

    // if(this.state.isLoggedIn) {
    //   return <div>Welcome Beasky</div>
    // } else {
    //   return <div>Welcome Guest</div>
    // }
  }
}

export default UserGreeting
