import React from 'react'
import {login} from '../adapters/index'


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      fields: {
        username: '',
        password: ''
      }
    };
  }

  handleChange = (e) => {
    if (e.target.name === 'email'){
      this.setState({fields: {...this.state.fields, username: e.target.value}})
    } else {
      this.setState({fields: {...this.state.fields, password: e.target.value}})
    }
  }

  // handleChange = e => {
  //   const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
  //   this.setState({ fields: newFields });
  // };

  handleSubmit = e => {
    e.preventDefault();
    login({username: this.state.fields.username, password: this.state.fields.password}).then(data => {
      if (data.error) {
        this.setState({ error: true });
      } else {
        this.props.handleLogin(data);
        this.props.history.push('/home');
      }
    });

    // this.props.handleLogin(e, this.state.fields)
  };

  render(){

    return(

    <div class="ui middle aligned center aligned grid">
      <div class="column">
        {this.state.error ? <h1> Try Again </h1> : null }
        <h2 class="ui image header">
          <div class="content">
            Log-in to your account
          </div>
        </h2>

        <form onSubmit={this.handleSubmit} class="ui large form">
          <div class="ui stacked secondary segment">
            <div class="field">
              <div class="ui left icon input">
                <i class="user icon"></i>
                <input onChange={this.handleChange} type="text" name="email" placeholder="Username" value={this.state.fields.username}/>
              </div>
            </div>
            <div class="field">
              <div class="ui left icon input">
                <i class="lock icon"></i>
                <input onChange={this.handleChange} type="password" name="password" placeholder="Password" value={this.state.fields.password}/>
              </div>
            </div>
            <button class="ui fluid large blue submit button">Login</button>
          </div>

          <div class="ui error message"></div>

        </form>

        <div class="ui message">
          New to us? <a href="/register">Register</a>
        </div>
      </div>
    </div>
    )
  }
}

export default Login
