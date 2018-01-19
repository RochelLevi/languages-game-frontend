import React from 'react'
import {Link} from 'react-router-dom'

export default class LanguagesDisplay extends React.Component {

  render(){
    return(
      <div>
        <div class="ui two column doubling stackable grid container">
          <div class="two wide column">One</div>
          <div class="two wide column">Two</div>
        </div>
      </div>

    )
  }
}
// <div classname="ui grid">
  <div classname="two column row">
//     <div classname="column">
//       <h1>My Languages</h1>
//     </div>
//     <div classname="column">
//       <h1>Languages</h1>
//     </div>
//   </div>
// </div>

// <div classname="two column large screen only row">
// <Link to="/languages/1">French</Link>
// <Link to="/languages/2">Greek</Link>
// <Link to="/languages/3">Hebrew</Link>
