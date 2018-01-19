import React from 'react'


const Register = (props) => {

    return(
    <div class="ui middle aligned center aligned grid">
      <div class="column">

        <h2 class="ui image header">
          <div class="content">
            Register For An Account
          </div>
        </h2>

        <form class="ui large form">
          <div class="ui stacked secondary segment">
            <div class="field">
              <div class="ui left icon input">
                <i class="user icon"></i>
                <input type="text" name="username" placeholder="Username"/>
              </div>
            </div>
            <div class="field">
              <div class="ui left icon input">
                <i class="lock icon"></i>
                <input type="password" name="password" placeholder="Password"/>
              </div>
            </div>
            <div class="field">
              <div class="ui left icon input">
                <i class="lock icon"></i>
                <input type="password" name="confirm-password" placeholder="Confirm Password"/>
              </div>
            </div>
            <div class="ui fluid large blue submit button">Register</div>
          </div>

          <div class="ui error message"></div>

        </form>

      </div>
    </div>)

}

export default Register
