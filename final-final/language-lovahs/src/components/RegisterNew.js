import React from 'react'
import {createUser} from '../adapters/index'
import {Button, Form, Message} from 'semantic-ui-react';


class Register extends React.Component {
  constructor(){
    super()

    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
    }
  }

  handleSubmit = () => {
    createUser({'username': this.state.username, 'password': this.state.password})
  }

  handleChange = (e) => {
    const field = e.target.name
    const value = e.target.value
    switch(field) {
      case "username":
        this.setState({username: value})
        break;
      case "password":
        this.setState({password: value})
        break;
      case "confirmPassword":
        this.setState({confirmPassword: value})
        break;
    }
  }


    $('.ui.form')
    .form({
      fields: {
        username: {
          identifier: 'username',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please enter a username'
            }
          ]
        },
        password: {
          identifier: 'password',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please enter a password'
            },
            {
              type   : 'minLength[6]',
              prompt : 'Your password must be at least {ruleValue} characters'
            }
          ]
        },
        confirmPassword: {
          identifier: 'confirmPassword',
          rules: [
            {
              type   : match[password],
              prompt : 'Confirm password must match password'
            }
          ]
        }
      }
    })


  render(){

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
          <div class="ui error message"></div>
        </form>

      </div>

    </div>)
  }

}

export default Register
