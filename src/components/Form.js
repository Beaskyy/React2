import React, { Component } from 'react'

export class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username: '',
       comment: '',
       topic: ''
    }
  }

  changerUser = event => {
    this.setState({
      username: event.target.value
    })
  }
  changeComment = event => {
    this.setState({
      comment: event.target.value
    })
  }
  changeTopic = event => {
    this.setState({
      topic: event.target.value
    })
  }
  handleSubmit = event => {
    alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
    event.preventDefault()
  }
  
  render() {
    const {username, comment, topic} = this.state
    return (
      <div>
        <h1>Controlled component</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
          <label>Username </label>
          <input type='text' value={username} onChange={this.changerUser} />
          </div>
          <br />
          <div>
            <label>Comment </label>
            <textarea type="text" value={comment} onChange={this.changeComment}></textarea>
          </div>
          <br />
          <div>
            <label>Topic </label>
            <select value={topic} onChange={this.changeTopic}>
              <option>React</option>
              <option>Angular</option>
              <option>Vue</option>
            </select>
          </div>
          <br />
          <div>
            <button type="submit">submit</button>
          </div>
        </form>

      </div>
    )
  }
}

export default Form
