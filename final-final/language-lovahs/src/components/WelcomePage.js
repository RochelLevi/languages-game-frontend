import React from 'react'

const WelcomePage = (props) => {
  return (
    <div class="ui middle aligned center aligned grid">
      <div class="column">
        <div class="ui stacked secondary segment">
        <h2 class="ui image header">
          <div as="h4" class="content">
              <h1>Let's get started!</h1>
              Click bellow to begin the game
              <i class="arrow down icon"></i>
          </div>
        </h2>
          <div class="ui image header">

      </div>
      </div>
      <button class="ui fluid large black submit button" onClick={() => props.pageChange('def')} >Next</button>
    </div>
  </div>

    )
  }

export default WelcomePage
