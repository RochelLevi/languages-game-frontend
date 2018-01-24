import React, { Component } from 'react';
import '../App.css';
import {Route, withRouter, Redirect} from 'react-router-dom'
import Login from '../components/Login'
import Register from '../components/Register'
import Navbar from '../components/Navbar'
import MainContainer from './MainContainer'
import Game from '../containers/Game'
import {fetchUsers, fetchUser, fetchLanguages, getCurrentUser} from '../adapters/index'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      auth: {currentUser: {}},
      users: [],
      languages: [],
      currentUserInfo: []
    }
  }

  handleLogin = ( user) => {
    const currentUser = {currentUser: user}
    localStorage.setItem('token', user.id)
    this.setState({auth: currentUser})
    // let user = this.state.users.filter(u => {return u.username === fields.username})[0]
    // this.setState({currentUserId: user.id}, () => this.props.history.push('/home'))
  }

  handleLogout = () => {
    this.setState({auth: {currentUser: {}}})
    localStorage.removeItem('token')
  }

  componentDidMount = () => {
    // fetchUsers().then(json => this.setState({users: json.users}))
    const token = localStorage.getItem('token')

    if(token){
      getCurrentUser()
        .then(res => this.setState({auth: {currentUser: res}}))
    }

    fetchLanguages().then(json => this.setState({languages: json}))
  }




  render() {

    return (
        <div>
          <Navbar currentUser={this.state.auth.currentUser} handleLogout={this.handleLogout}/>
          <Route
           path="/"
           render={() => {
             const loggedIn = !!this.state.auth.currentUser.id
             return loggedIn ? <Redirect to='/home'/> : <Redirect to='/login'/>
           }}

          />
          <Route path="/login" component={(routerProps) => <Login {...routerProps} handleLogin={this.handleLogin}/> }/>
          <Route path="/home" component={(routerProps) => <MainContainer {...routerProps} currentUser={this.state.auth.currentUser} allLanguages={this.state.languages}/>}/>
          <Route path="/register" component={() => <Register handleLogin={this.handleLogin}/> }/>
          <Route exact path="/languages/:id" component={() => <Game languages={this.state.laguages} history={this.props.history}/>}/>

        </div>
      )
    }
  }

export default withRouter(App);
