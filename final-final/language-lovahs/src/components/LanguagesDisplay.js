import React from 'react'
import {Link} from 'react-router-dom'

export default class LanguagesDisplay extends React.Component {

  render(){
    return(
      <div>
        <div classname="ui grid">
          <div classname="two column large screen only row">
          <h1>My Languages</h1>

            <div classname="two wide column">
              <div classname="ui segment">
                <Link to="/languages/1">French</Link>
              </div>
              <div classname="ui segment">
                <Link to="/languages/2">Greek</Link>
              </div>
              <div classname="ui segment">
                <Link to="/languages/3">Hebrew</Link>
              </div>
            </div>
          <div classname="two wide column">
              <div classname="ui segment">
                <h1>Languages</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
