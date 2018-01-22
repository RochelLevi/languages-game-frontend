import React from 'react'

const WordPage = (props) => {
  return (
    <div>

    <div style={{border: "1px solid rgb(85, 184, 71)", width: "250px", height: "35px"}}><input id="multi-select-1" type="checkbox" name="1" value="1" class="answer selected" disabled=""/><span class="choice-index-span">False.</span><i id="check" className="green check circle icon" style={{display: "inline-block"}}></i></div>

      <div class="ui form">
        <div class="grouped fields">
          <label>How often do you use checkboxes?</label>

          <div class="field" style={{'background-color': 'rgb(230, 243, 244)', width: "250px", height: "35px"}}>
            <div class="ui checkbox" style={{"vertical-align": "middle"}}>
              <input type="radio" name="example2"/>
              <label>Once a week</label>
            </div>
          </div>

          <div class="field">
            <div class="ui checkbox">
              <input type="radio" name="example2"/>
              <label>2-3 times a week</label>
            </div>
          </div>
          <div class="field">
            <div class="ui checkbox">
              <input type="radio" name="example2"/>
              <label>Once a day</label>
            </div>
          </div>
          <div class="field">
            <div class="ui checkbox">
              <input type="radio" name="example2"/>
              <label>Twice a day</label>
            </div>
          </div>
        </div>
      </div>


      <button onClick={() => props.pageChange('spelling')} >Next</button>
    </div>
  )
}

export default WordPage
