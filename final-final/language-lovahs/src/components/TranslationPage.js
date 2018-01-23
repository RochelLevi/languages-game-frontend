import React from 'react'
import '../word.css';
import {Segment, Container} from 'semantic-ui-react'

const TranslationPage = (props) => {

    const shuffledWords = props.words

    function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
    }

    shuffleArray(shuffledWords)


    return (

      <div class="ui middle aligned center aligned grid">
        <div class="column">
      <h1>{props.currentWord.english_translation}</h1>



        <div class="ui large form">
          <div class="ui stacked secondary segment">
          <div class="grouped fields">
            <label>Select the correct definition</label>

            <Segment style={{height: "5%"}}>
              <div class="field" >
                <div class="ui huge checkbox" >
                  <input type="radio" name="example2"/>
                  <label>{shuffledWords[0].name}</label>
                </div>
              </div>
            </Segment>

            <Segment style={{height: "5%"}}>
              <div class="field">
                <div class="ui huge checkbox">
                  <input type="radio" name="example2"/>
                  <label>{shuffledWords[1].name}</label>
                </div>
              </div>
            </Segment>

            <Segment style={{height: "5%"}}>
              <div class="field">
                <div class="ui huge checkbox">
                  <input type="radio" name="example2"/>
                  <label>{shuffledWords[2].name}</label>
                </div>
              </div>
            </Segment>

            <Segment style={{height: "5%"}}>
              <div class="field">
                <div class="ui huge checkbox">
                  <input type="radio" name="example2"/>
                  <label>{shuffledWords[3].name}</label>
                </div>
              </div>
            </Segment>

            <Segment style={{height: "5%"}}>
              <div class="field">
                <div class="ui huge checkbox">
                  <input type="radio" name="example2"/>
                  <label>{shuffledWords[4].name}</label>
                </div>
              </div>
            </Segment>

          </div>
        </div>
        </div><br/>
        <button class="ui fluid large blue submit button" onClick={() => props.pageChange('spelling')}>Next</button>
      </div>




      </div>
  )
}

export default TranslationPage
