import React from 'react'
import LanguagesDisplay from '../components/LanguagesDisplay'
import {Route} from 'react-router-dom'
import {fetchUser} from '../adapters/index'

export default class MainContainer extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      languages: []
    }

  }

  componentDidMount(){
    // const token = localStorage.getItem('token')
    // if(token){
    //   fetchUser(token)
    //     .then(res => this.setState({languages: res}, console.log('res', res)))
    // } else {
    //   this.props.history.push('/login')
    // }
  }



  render(){
    return(
      <div>
        <LanguagesDisplay
          history={this.props.history}
          userLanguages={this.props.userLanguages}
          currentUser={this.props.currentUser}
          allLanguages={this.props.allLanguages}/>
      </div>
    )
  }
}
