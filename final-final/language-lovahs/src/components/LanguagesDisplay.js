import React from 'react'
import {Link} from 'react-router-dom'
import { Container, Divider, Grid, Header, Image } from 'semantic-ui-css/semantic.min.css'


export default class LanguagesDisplay extends React.Component {

  render(){
    return(
      <div class="ui grid">
        <div class="two column row">
          <div class="column">
            <div class="ui message">
              My Languages
            </div>
            <div class="ui message">
              <div>
                <i class="france flag"></i>
                <Link to="/languages/1">French</Link>
              </div>
              <div>
                <i class="greece flag"></i>
                <Link to="/languages/2">Greek</Link>
              </div>
              <div>
                <i class="israel flag"></i>
                <Link to="/languages/3">Hebrew</Link>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="ui message">
                All Languages
            </div>
          </div>
        </div>
      </div>
    )
  }
}
