import React, { Component } from 'react';

class Welcome extends Component {
  render (props) {
    const {name, heroName} = this.props
    return (
      <div>
        <h2>Welcome {name} a.k.a {heroName}</h2>
      </div>
    )
  }
}

export default Welcome;
