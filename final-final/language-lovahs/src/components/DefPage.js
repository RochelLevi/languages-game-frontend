import React from 'react'

const DefPage = (props) => {
  if (props.currentWord !== {}){
 return (
      <div class="ui middle aligned center aligned grid">
        <div class="column">
          <div class="ui stacked secondary segment">
          <h2 class="ui image header">
            <div as="h4" class="content">
                New Word
            </div>
          </h2>
            <div class="content">
              <h1 class="ui header">
              {props.currentWord.name} : {props.currentWord.english_translation}
            </h1>
            </div>
            <div class="ui image header">

          </div>
        </div>
          <button class="ui fluid large black submit button" onClick={() => props.pageChange('word')} >Next</button>
      </div>
    </div>
    )
  }
}

export default DefPage
