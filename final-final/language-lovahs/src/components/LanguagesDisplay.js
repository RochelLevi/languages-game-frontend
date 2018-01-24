import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import { Container, Divider, Grid, Header, Image } from 'semantic-ui-css/semantic.min.css'
import LanguageCard from './LanguageCard'
import { Button, Card, Icon} from 'semantic-ui-react'


export default class LanguagesDisplay extends React.Component {

  getNewLanguages() {
    let newbs = []
    for (let l of this.props.alllanguages) {
      for (let lang of this.props.userLanguages){
        (l !== lang) && newbs.push(lang)
      }
    }
    return newbs
  }

  handleClick = (id) =>{
    this.props.history.push(`/languages/${id}`)
  }


keepLearningDisplay = () => {
    let keepLearning = Array.from(this.props.userLanguages.users).filter(l => { return l.points !== 0 })

    let startLearning = Array.from(this.props.userLanguages.users).filter(l => { return l.points === 0 })

    return keepLearning.map(l => {
    return (
      <div class='ui cards'>
        <div class='ui raised card'>
          <div class='content'>
              <div class='header'>
                {l.name}
              </div>
            <div class='ui bottom attached button' onClick={() => this.handleClick(4)}>
              <i class='greece flag'></i>
              Play Game!
            </div>
            </div>
        </div>

      </div>
    )
  })
  }

  render(){

    if (this.props.userLanguages.users){
      console.log(this.props.userLanguages.users[0])

      return(
        <div class="ui center aligned grid">
         <div class="column">

           <h2 class="ui header">
              <div class="content">
                Welcome!
              </div>
            </h2>

            <div class="ui grid">
            <div class="two column row">
              <div class="column">
                <div class="ui header">
                  KEEP LEARNING
                </div>
              </div>

              <div class="column">
                <div class="ui header">
                    START LEARNING
                </div>

                <div class="ui cards">
                  <div class="ui raised card">
                    <div class="content">
                        <div class="header">
                          Greek
                        </div>
                      <div class="ui bottom attached button" onClick={() => this.handleClick(4)}>
                        <i class="greece flag"></i>
                        Play Game!
                      </div>
                  </div>
                </div>

                <div class="ui raised card">
                  <div class="content">
                      <div class="header">
                        French
                      </div>
                    <div class="ui bottom attached button" onClick={() => this.handleClick(1)}>
                      <i class="france flag"></i>
                      Play Game!
                    </div>
                </div>
              </div>

              <div class="ui raised card">
                <div class="content">
                    <div class="header">
                      Spanish
                    </div>
                  <div class="ui bottom attached button" onClick={() => this.handleClick(2)}>
                    <i class="spain flag"></i>
                    Play Game!
                  </div>
              </div>
            </div>

            <div class="ui raised card">
              <div class="content">
                  <div class="header">
                    Hebrew
                  </div>
                <div class="ui bottom attached button" onClick={() => this.handleClick(3)}>
                  <i class="israel flag"></i>
                  Play Game!
                </div>
            </div>
          </div>

              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

    )}
    else{
      return null
    }
  }
}


//<div class="ui special cards">
//   <div class="card">
//     <div class="content">
//       <a class="header">Greek</a>
//       </div>
//     </div>
// </div>
