import React from 'react'
import { Button } from 'semantic-ui-react'

const SpellingPage = (props) => {

  return (
    <div class="ui middle aligned center aligned grid">
      <div class="column">
        <div class="ui stacked secondary segment">
        <h2 class="ui image header">
          <div as="h4" class="content">
              Spell '{props.currentWord.english_translation}' bellow
          </div>
        </h2>
          <div class="content">
            <div class="ui form">
              <div class="field">
                <label>Your new word</label>
                <input type="text"></input>
              </div>
            </div>
          </div>
          <div class="ui image header">

        </div>
      </div>
      <button class="ui fluid large black submit button" onClick={() => props.pageChange('def')} >Next</button>
    </div>
    </div>
  )
}

export default SpellingPage
