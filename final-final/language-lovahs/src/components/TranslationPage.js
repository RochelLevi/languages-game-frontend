import React from 'react'
import '../word.css';
import {Segment, Container} from 'semantic-ui-react'

export default class TranslationPage extends React.Component {

  shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
  }

  constructor(props){
    super(props)

    const words = [...this.props.words]

    this.state = {
      checked: '',
      shuffledWords: this.shuffleArray(words)
    }
  }

  handleChange = (e) => {
    const value = e.target.value
    this.setState({checked: value})

  }


  render(){

    return (

      <div class="ui middle aligned center aligned grid">
        <div class="column">
      <h1>{this.props.currentWord.english_translation}</h1>



        <div class="ui large form">
          <div class="ui stacked secondary segment">
          <div class="grouped fields">
            <label>Select the correct definition</label>

            <Segment style={{height: "5%"}}>
              <div class="field" >
                <div class="ui huge checkbox" >
                  <input type="radio" value={this.state.shuffledWords[0].id} checked={parseInt(this.state.checked) === this.state.shuffledWords[0].id} onChange={this.handleChange}/>
                  <label>{this.state.shuffledWords[0].name}</label>
                </div>
              </div>
            </Segment>

            <Segment style={{height: "5%"}}>
              <div class="field">
                <div class="ui huge checkbox">
                  <input type="radio" value={this.state.shuffledWords[1].id} checked={parseInt(this.state.checked) === this.state.shuffledWords[1].id} onChange={this.handleChange}/>
                  <label>{this.state.shuffledWords[1].name}</label>
                </div>
              </div>
            </Segment>

            <Segment style={{height: "5%"}}>
              <div class="field">
                <div class="ui huge checkbox">
                  <input type="radio" value={this.state.shuffledWords[2].id} checked={parseInt(this.state.checked) === this.state.shuffledWords[2].id} onChange={this.handleChange}/>
                  <label>{this.state.shuffledWords[2].name}</label>
                </div>
              </div>
            </Segment>

            <Segment style={{height: "5%"}}>
              <div class="field">
                <div class="ui huge checkbox">
                  <input type="radio" value={this.state.shuffledWords[3].id} checked={parseInt(this.state.checked) === this.state.shuffledWords[3].id} onChange={this.handleChange}/>
                  <label>{this.state.shuffledWords[3].name}</label>
                </div>
              </div>
            </Segment>

            <Segment style={{height: "5%"}}>
              <div class="field">
                <div class="ui huge checkbox">
                  <input type="radio" value={this.state.shuffledWords[4].id} checked={parseInt(this.state.checked) === this.state.shuffledWords[4].id} onChange={this.handleChange}/>
                  <label>{this.state.shuffledWords[4].name}</label>
                </div>
              </div>
            </Segment>

          </div>
        </div>
        </div><br/>
        <button class="ui fluid large black submit button" onClick={() => this.props.pageChange('spelling', this.state.checked)}>Next</button>
      </div>


      </div>
    )}



}
