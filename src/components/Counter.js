import React, { Component } from 'react'

class Counter extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }
  }

  increment() {
    // this.setState({
    //   counter: this.state.counter + 1
    // }, () => {
    //   console.log(this.state.counter)
    // })

    // console.log(this.state.counter)


    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }))
  }

  incrementFive() {
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }

  render() {
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={() => this.incrementFive()}>increment</button>
      </div>
    )
  }
}

export default Counter
