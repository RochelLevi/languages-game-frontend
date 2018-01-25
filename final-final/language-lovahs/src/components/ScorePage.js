import React from 'react'
import { Button } from 'semantic-ui-react'



const ScorePage = (props) => {

  return (

    <div class="ui middle aligned center aligned grid">
      <div class="column">
        <div class="ui stacked secondary segment">
        <h2 class="ui image header">
          <div as="h4" class="content">
              Congratulations!
          </div>
        </h2>
          <div class="content">
            <h1 class="ui header">
            You learned {props.score} words this round!
          </h1>
          </div>
      </div>
    </div>
  </div>
  )
}

export default ScorePage
