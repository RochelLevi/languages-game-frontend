import React, { Component } from 'react';
import '../App.css';
import {Route} from 'react-router-dom'
import Login from '../components/Login'
import Register from '../components/Register'
import Profile from '../components/Profile'
import Navbar from '../components/Navbar'
import MainContainer from './MainContainer'
import Game from '../containers/Game'
import {fetchUsers} from '../adapters/index'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      users: []
    }
  }

  componentDidMount = () => {
    fetchUsers().then(json => this.setState({users: json}))
  }

  render() {
    console.log(this.state.users);
    return (
        <div>
          <Navbar />
          <Route exact path="/" component={MainContainer}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/users/:id" render={Profile}/>
          <Route exact path="/languages/:id" component={Game}/>
        </div>
    );
  }
}

export default App;
