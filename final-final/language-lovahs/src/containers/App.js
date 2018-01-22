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
      currentUser: ''
    }
  }

  componentDidMount = () => {
    fetchUsers().then(json => this.setState({users: json}))
    fetchLanguages().then(json => this.setState({languages: json}))
  }

  getUserStats = (userName) => {
    let user = this.state.users.find(u => {return u[0] === u.username})
    console.log(user);
  }

  render() {
    console.log(this.state.users);
    return (
        <div>
          <Navbar />
          <Route exact path="/" component={Login}/>
          <Route path="/login" component={Login}/>
          <Route path="/home" component={() => <MainContainer getUserStats={this.getUserStats}/>}/>
          <Route path="/register" component={Register}/>
          <Route exact path="/languages/:id" component={Game}/>
        </div>
    );
  }
}

export default App;
