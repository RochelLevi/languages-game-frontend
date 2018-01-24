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
               <div class='ui bottom attached button' onClick={() => this.handleClick(4)}>
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
               <div class='ui bottom attached button' onClick={() => this.handleClick(l.id)}>
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
                  <div class="ui raised card">
                    {this.keepLearningDisplay()}
                  </div>
                </div>
              </div>

              <div class="column">
                <div class="ui header">
                    START LEARNING
                </div>
                  <div class="ui raised card">
                    {this.startLearningDisplay()}
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
