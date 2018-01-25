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

    return keepLearning.map(l => {
        return (
         <div class='ui cards'>
           <div class='ui raised card'>
             <div class='content'>
                 <div class='header'>
                   {l.name}
                 </div>
                 <div >
                   Total Points: {l.points}
                 </div>
               <div class='ui green bottom attached button' onClick={() => this.handleClick(4)}>
                 Play Game!
               </div>
           </div>
         </div>
        </div>
      )})
  }

  startLearningDisplay = () => {
    let startLearning = Array.from(this.props.userLanguages.users).filter(l => { return l.points === 0 })

    return startLearning.map(l => {
        return (
         <div class='ui cards'>
           <div class='ui raised card'>
             <div class='content'>
                 <div class='header'>
                   {l.name}
                 </div>
               <div><br></br></div>
               <div class='ui green bottom attached button' onClick={() => this.handleClick(l.id)}>
                 Play Game!
               </div>
           </div>
         </div>
        </div>
      )})
  }

  render(){

    if (this.props.userLanguages.users ) {
      console.log(this.keepLearningDisplay())
      return (
        <div class="ui center aligned grid">
         <div class="column card-container">
           <img class="background" src={require('../international.jpg')}></img>
           <h2 class="banner">
              <div class="content">
                It's learning time!
                <br></br>
                <br></br>
              </div>
            </h2>

            <div class="ui grid">
            <div class="two column row">

              <div class="column">
                <div class="banner">
                    KEEP LEARNING
                    <br></br>
                  <br></br>
              </div>
                    {this.keepLearningDisplay()}
              </div>

              <div class="column">
                <div class="banner">
                    START LEARNING
                    <br></br>
                    <br></br>
                </div>
                    {this.startLearningDisplay()}
                    <div class='ui cards'>
                      <div class='ui raised card'>
                        <div class='content'>
                            <div class='header'>
                              Greek
                            </div>
                          <div><br></br></div>
                          <div class='ui green bottom attached button' onClick={() => this.handleClick(4)}>
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

    )} else {
      return null
    }
  }
}
