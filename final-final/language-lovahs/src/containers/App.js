import React, { Component } from 'react';
import '../App.css';
import {Route, withRouter} from 'react-router-dom'
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
      currentUserId: 0,
      currentUserInfo: []
    }
  }

  handleLogin = (event, fields) => {
    event.preventDefault()
    let user = this.state.users.filter(u => {return u.username === fields.username})[0]
    this.setState({currentUserId: user.id}, () => this.props.history.push('/home'))
  }

  componentDidMount = () => {
    fetchUsers().then(json => this.setState({users: json.users}))
    fetchLanguages().then(json => this.setState({languages: json}))
    this.currentUserInfo()
  }

  currentUserInfo = () => {
    fetchUser(this.state.currentUserId)
    .then(json => this.setState({currentUserInfo: json.users}, console.log("raw", json)))
  }



  render() {
    console.log(this.state.languages)

    return (
        <div>
          <Navbar />
          <Route exact path="/" component={() => <Login handleLogin={this.handleLogin}/> }/>
          <Route path="/login" component={() => <Login handleLogin={this.handleLogin}/> }/>
          <Route path="/home" component={() => <MainContainer currentUser={this.state.currentUserInfo}/>}/>
          <Route path="/register" component={() => <Register handleLogin={this.handleLogin}/> }/>
          <Route exact path="/languages/:id" component={() => <Game languages={this.state.laguages} history={this.props.history}/>}/>

        </div>
      )
    }
  }

export default withRouter(App);
