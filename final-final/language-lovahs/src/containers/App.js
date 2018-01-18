import React, { Component } from 'react';
import '../App.css';
import {Route} from 'react-router-dom'
import Login from '../components/Login'
import Profile from '../components/Profile'
import Navbar from '../components/Navbar'
import MainContainer from './MainContainer'

class App extends Component {
  constructor(props){
    super(props)

  }
  render() {
    return (
        <div>
          <Navbar />
          <Route exact path="/" component={MainContainer}/>
          <Route path="/login" render={Login}/>
          <Route path="/users/:id" render={Profile}/>
        </div>
    );
  }
}

export default App;
