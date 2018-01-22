import React from 'react'
import '../word.css';
import {Segment, Container} from 'semantic-ui-react'

const WordPage = (props) => {
  return (
    <div class ="ui stacked secondary segment">


      <div class="ui form">
        <div class="grouped fields">
          <label>How often do you use checkboxes?</label>

          <Segment style={{'background-color': 'rgb(230, 243, 244)', width: "20%", height: "5%"}}>
            <div class="field" >
              <div class="ui huge checkbox" >
                <input type="radio" name="example2"/>
                <label>Once a week</label>
              </div>
            </div>
          </Segment>

          <Segment style={{'background-color': 'rgb(230, 243, 244)', width: "20%", height: "5%"}}>
            <div class="field">
              <div class="ui huge checkbox">
                <input type="radio" name="example2"/>
                <label>2-3 times a week</label>
              </div>
            </div>
          </Segment>

          <Segment style={{'background-color': 'rgb(230, 243, 244)', width: "20%", height: "5%"}}>
            <div class="field">
              <div class="ui huge checkbox">
                <input type="radio" name="example2"/>
                <label>Once a day</label>
              </div>
            </div>
          </Segment>

          <Segment style={{'background-color': 'rgb(230, 243, 244)', width: "20%", height: "5%"}}>
            <div class="field">
              <div class="ui huge checkbox">
                <input type="radio" name="example2"/>
                <label>Twice a day</label>
              </div>
            </div>
          </Segment>

        </div>
      </div>


      {// <div class="boxes">
      //
      //
      //   <div class="ui huge checkbox">
      //     <input type="radio" id="box-1"/>
      //     <label for="box-1">Sustainable typewriter cronut</label>
      //   </div>
      //
      //   <div class="ui huge checkbox">
      //     <input type="radio" id="box-2"/>
      //     <label for="box-2">Gentrify pickled kale chips </label>
      //   </div>
      //
      //   <div class="ui huge checkbox">
      //     <input type="radio" id="box-3"/>
      //     <label for="box-3">Gastropub butcher</label>
      //   </div>
      // </div>
    }

      <button onClick={() => props.pageChange('spelling')} >Next</button>

    </div>
  )
}

export default WordPage
