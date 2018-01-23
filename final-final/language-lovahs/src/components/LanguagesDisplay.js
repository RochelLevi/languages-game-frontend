import React from 'react'
import {Link} from 'react-router-dom'
import { Container, Divider, Grid, Header, Image } from 'semantic-ui-css/semantic.min.css'


export default class LanguagesDisplay extends React.Component {


  render(){
    console.log('languages', this.props.currentUser[0])
    // console.log(Object.keys(this.props.currentUser.languages))
    return(
      <div class="ui center aligned grid">
       <div class="column">

         <h2 class="ui image header">
            <div class="content">
              Welcome!
            </div>
          </h2>

          <div class="ui stacked secondary segment">
          <div class="grouped fields">
          <div class="ui grid">
          <div class="two column row">
            <div class="column">
              <div class="ui header">
                My Languages
              </div>
            </div>

            <div class="column">
              <div class="ui header">
                  All Languages
              </div>


              <div class="ui cards">
                <div class="card">
                  <div class="content">
                    <i class="greece flag"></i>
                    <Link class="header" to="/languages/4">Greek</Link>
                  </div>
                </div>


                <div class="card">
                  <div class="content">
                    <i class="france flag"></i>
                    <Link class="header" to="/languages/1">French</Link>
                  </div>
                </div>

                <div class="card">
                  <div class="content">
                    <i class="spain flag"></i>
                    <Link class="header" to="/languages/2">Spanish</Link>
                  </div>
                </div>

                <div class="card">
                  <div class="content">
                    <i class="israel flag"></i>
                    <Link class="header" to="/languages/3">Hebrew</Link>
                  </div>
                </div>

              </div>


            </div>
          </div>
        </div>
        </div>
      </div>
    </div>

    </div>







    )
  }
}


//<div class="ui special cards">
//   <div class="card">
//     <div class="content">
//       <a class="header">Greek</a>
//       </div>
//     </div>
// </div>
