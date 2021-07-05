import React, { Component } from 'react'

export class HoverCounterTwo extends Component {
  
  render() {
    const {count, clickHandler} = this.props
    return (
      <div>
        <h3 onMouseOver={clickHandler}>Hovered {count} times</h3>
      </div>
    )
  }
}

export default HoverCounterTwo
