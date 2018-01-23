import React from 'react'


class Login extends React.Component {
  constructor() {
    super();
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

  // handleSubmit = e => {
  //   e.preventDefault();
  //   api.auth.login(this.state.fields).then(data => {
  //     console.log('response is', data);
  //     if (data.error) {
  //       this.setState({ error: true });
  //     } else {
  //       this.props.handleLogin(data);
  //       this.props.history.push('/');
  //     }
  //   });
  // };

  render(){
    console.log(this.props)
    return(
    <div class="ui middle aligned center aligned grid">
      <div class="column">

        <h2 class="ui image header">
          <div class="content">
            Log-in to your account
          </div>
        </h2>

        <form onSubmit={(event) => this.props.handleLogin(event, this.state.fields)} class="ui large form">
          <div class="ui stacked secondary segment">
            <div class="field">
              <div class="ui left icon input">
                <i class="user icon"></i>
                <input onChange={this.handleChange} type="text" name="email" placeholder="Username"/>
              </div>
            </div>
            <div class="field">
              <div class="ui left icon input">
                <i class="lock icon"></i>
                <input onChange={this.handleChange} type="password" name="password" placeholder="Password"/>
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
