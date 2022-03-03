import React, { Component } from 'react'

 class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username:'' ,
         comments:'',
         description:''   
      }
    }

    handleUsernameChange=(event)=>{
this.setState({
    username:event.target.value
})
    }
  render() {
    return (
      <div>
          <form>
              <label name="username">username</label>
              <input type='text' value={this.state.username} onChange={this.handleUsernameChange} />
          </form>
      </div>
    )
  }
}

export default Form