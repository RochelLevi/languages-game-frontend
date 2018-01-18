import React from 'react'
import LanguagesDisplay from '../components/LanguagesDisplay'
import {Route} from 'react-router-dom'

export default class MainContainer extends React.Component{
  constructor(props){
    super(props)

  }


  render(){
    return(
      <div>
        <LanguagesDisplay/>
      </div>
    )
  }
}
