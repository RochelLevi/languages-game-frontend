import React from 'react'
import {createUser} from '../adapters/index'


class Register extends React.Component {
  constructor(){
    super()

    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      touched: {
        username: false,
        password: false,
        confirmPassword: false
      },
      errors: {
        username: true,
        password: true,
        confirmPassword: true
      }
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    createUser({'username': this.state.username, 'password': this.state.password})
    window.location.replace(`http://localhost:3001/login`)
  }

  checkValid(){
    this.setState({
      errors: {username: !this.state.username.length > 0,
              password: !this.state.password.length > 0,
              confirmPassword:  !(this.state.password === this.state.confirmPassword)
              }
    })
  }


  handleChange = (e) => {
    const field = e.target.name
    const value = e.target.value
    switch(field) {
      case "username":
        this.setState({username: value}, this.checkValid)
        break;
      case "password":
        this.setState({password: value}, this.checkValid)
        break;
      case "confirmPassword":
        this.setState({confirmPassword: value}, this.checkValid)
        break;
    }
  }

  handleBlur = (e) => {
    const field = e.target.name
    const value = e.target.value
    switch(field) {
      case "username":
        this.setState({touched: {...this.state.touched, username: true}}, this.checkValid)
        break;
      case "password":
        this.setState({touched: {...this.state.touched, password: true}}, this.checkValid)
        break;
      case "confirmPassword":
        this.setState({touched: {...this.state.touched, confirmPassword: true}}, this.checkValid)
        break;
    }
  }


  render(){

    const disabled = this.state.errors.username ||
        this.state.errors.password ||
        this.state.errors.confirmPassword

    const displayErrors = (this.state.errors.username  && this.state.touched.username) ||
        (this.state.errors.password && this.state.touched.password) ||
        (this.state.errors.confirmPassword && this.state.touched.confirmPassword)

    const errors =
      <div class="ui red message">
        <div classname="ui error message">
          <i classname="close icon"></i>
          <div classname="header">Please Fix Error(s) Below</div>
          <ul classname="list">
            {this.state.errors.username && this.state.touched.username ? <li>Username can not be blank.</li> : ''}
            {this.state.errors.password && this.state.touched.password ? <li>Password can not be blank.</li> : ''}
            {this.state.errors.confirmPassword && this.state.touched.confirmPassword ? <li>Confirm Password must match Password.</li> : ''}
          </ul>
        </div>
      </div>

    return(
    <div class="ui middle aligned center aligned grid">
      <div class="column">

        <h2 class="ui image header">
          <div class="content">
            Register For An Account
          </div>
        </h2>


        <form class="ui large form" onSubmit={this.handleSubmit}>
          <div class="ui stacked secondary segment">

            {displayErrors ? errors : ''}

            <div class="field">
              <div class="ui left icon input">
                <i class="user icon"></i>
                <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} onBlur={this.handleBlur}/>
              </div>
            </div>

            <div class="field">
              <div class="ui left icon input">
                <i class="lock icon"></i>
                <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} onBlur={this.handleBlur}/>
              </div>
            </div>

            <div class="field">
              <div class="ui left icon input">
                <i class="lock icon"></i>
                <input type="password" name="confirmPassword" placeholder="Confirm Password" value={this.state.confirmPassword} onChange={this.handleChange} onBlur={this.handleBlur}/>
              </div>
            </div>
            <button class="ui fluid large blue submit button" disabled={disabled}>Register</button>
          </div>

        </form>

      </div>
    </div>)
  }

}

export default Register
