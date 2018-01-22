import React from 'react'
import '../word.css';
import {Segment, Container} from 'semantic-ui-react'

const WordPage = (props) => {
  return (

    <div class="ui middle aligned center aligned grid">
      <div class="column">
      <h1>{props.currentWord.name}</h1>


      <div class="ui large form">
        <div class="ui stacked secondary segment">
        <div class="grouped fields">
          <label>How often do you use checkboxes?</label>

          <Segment style={{height: "5%"}}>
            <div class="field" >
              <div class="ui huge checkbox" >
                <input type="radio" name="example2"/>
                <label>Once a week</label>
              </div>
            </div>
          </Segment>

          <Segment style={{height: "5%"}}>
            <div class="field">
              <div class="ui huge checkbox">
                <input type="radio" name="example2"/>
                <label>2-3 times a week</label>
              </div>
            </div>
          </Segment>

          <Segment style={{height: "5%"}}>
            <div class="field">
              <div class="ui huge checkbox">
                <input type="radio" name="example2"/>
                <label>Once a day</label>
              </div>
            </div>
          </Segment>

          <Segment style={{height: "5%"}}>
            <div class="field">
              <div class="ui huge checkbox">
                <input type="radio" name="example2"/>
                <label>Twice a day</label>
              </div>
            </div>
          </Segment>

        </div>
      </div>

      <button onClick={() => props.pageChange('spelling')} >Next</button>
      </div>
    </div>
    </div>
  )
}

export default WordPage
