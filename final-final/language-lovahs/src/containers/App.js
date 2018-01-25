import React, { Component } from 'react';
import '../App.css';
import {Route, withRouter, Redirect} from 'react-router-dom'
import Login from '../components/Login'
import Register from '../components/Register'
import Navbar from '../components/Navbar'
import MainContainer from './MainContainer'
import Game from '../containers/Game'
import {fetchLanguages, getCurrentUser, fetchUser} from '../adapters/index'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      auth: {currentUser: {}},
      users: [],
      languages: [],
      userLanguages: [],
      currentUserInfo: []
    }
  }

  handleLogin = ( user) => {
    const currentUser = {currentUser: user}
    localStorage.setItem('token', user.id)
    this.setState({auth: currentUser}, )
    this.props.history.push('/home')
  }

  handleLogout = () => {
    this.setState({auth: {currentUser: {}}})
    localStorage.removeItem('token')
    this.props.history.push('/')
  }

  componentDidMount = () => {
    const token = localStorage.getItem('token')
    console.log('mounting');
    if(token){
      getCurrentUser()
        .then(res => this.setState({auth: {currentUser: res}}))
      fetchUser(token)
        .then(res => this.setState({userLanguages: res}))
    }

    fetchLanguages().then(json => this.setState({languages: json}))
  }


  render() {
    return (
        <div>
          <img class="background" src={require("../international.jpg")}></img>
          <Navbar currentUser={this.state.auth.currentUser} handleLogout={this.handleLogout}/>
          <Route
           exact path="/"
           render={() => {
             const loggedIn = !!localStorage['token']
             return loggedIn ? <Redirect to='/home'/> : <Redirect to='/login'/>
           }}

          />
        <Route exact path="/login" render={(routerProps) => {
          const loggedIn = !!localStorage['token']
          return loggedIn ? <Redirect to='/home'/> :
          <Login {...routerProps} handleLogin={this.handleLogin}/>
            }
          }/>
          <Route path="/home" render={(routerProps) => {
            const loggedIn = !!localStorage['token']
            return loggedIn ?
            <MainContainer {...routerProps} currentUser={this.state.auth.currentUser} allLanguages={this.state.languages} userLanguages={this.state.userLanguages}/> :
            <Redirect to='/login'/> }}
              />
          <Route path="/register" component={Register}/>
          <Route exact path="/languages/:id" component={() => <Game languages={this.state.laguages} history={this.props.history} currentUser={this.state.auth.currentUser} userLanguages={this.state.userLanguages}/>}/>

        </div>
      )
    }
  }

export default withRouter(App);
