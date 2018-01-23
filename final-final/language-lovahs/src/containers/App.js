import React, { Component } from 'react';
import '../App.css';
import {Route} from 'react-router-dom'
import Login from '../components/Login'
import Register from '../components/Register'
import Profile from '../components/Profile'
import Navbar from '../components/Navbar'
import MainContainer from './MainContainer'
import Game from '../containers/Game'
import {fetchUsers, fetchUser, fetchLanguages} from '../adapters/index'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      users: [],
      languages: [],
      currentUserId: 1,
      currentUserInfo: []
    }
  }

  handleLogin = (event, fields) => {
    event.preventDefault()
    let user = this.state.users.filter(u => {return u.username === fields.username})[0]
    this.setState({currentUser: user.id}, () => {})
  }

  componentDidMount = () => {
    fetchUsers().then(json => this.setState({users: json.users}))
    fetchLanguages().then(json => this.setState({languages: json}))
    this.currentUserInfo()
  }

  currentUserInfo = () => {
    fetchUser(this.state.currentUserId)
    .then(json => this.setState({currentUserInfo: json}))
  }



  render() {
    return (
        <div>
          <Navbar />
          <Route exact path="/" component={Login}/>
          <Route path="/login" component={() => <Login handleLogin={this.handleLogin}/>}/>
          <Route path="/home" component={() => <MainContainer languages={this.state.languages.languages} currentUser={this.state.currentUserInfo}/>}/>
          <Route path="/register" component={Register}/>
          <Route exact path="/languages/:id" component={() => <Game/>}/>
        </div>
      )
    }
  }

export default App;
