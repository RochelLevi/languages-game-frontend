import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = (props) => {

  const loggedIn = !!localStorage['token']

  return(
    <div className={"ui inverted right menu"}>
      <NavLink to="/home" className="item">Home</NavLink>
      {loggedIn ?
        <a className="item" onClick={props.handleLogout}>Logout</a> :
        <NavLink to="/login" className="item">Login</NavLink>
      }
      {loggedIn ?
        <div className='item'>{`Welcome ${props.currentUser.username}`}</div> :
        null
      }
    </div>
  )
}

export default Navbar
