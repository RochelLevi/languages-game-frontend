import React from 'react'
import LanguagesDisplay from '../components/LanguagesDisplay'
import {Route} from 'react-router-dom'

export default class MainContainer extends React.Component{
  constructor(props){
    super(props)

  }

  componentDidMount(){
    const token = localStorage.getItem('token')
    if(!token){
      this.props.history.push('/login')
    }
  }



  render(){
    return(
      <div>
        <LanguagesDisplay languages={this.props.languages} currentUser={this.props.currentUser}/>
      </div>
    )
  }
}
